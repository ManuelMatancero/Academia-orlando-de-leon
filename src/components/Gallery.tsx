import React, { useEffect, useState, useCallback } from 'react';
import { storage } from '../config/firebase'; // Asegúrate que la ruta sea correcta
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Loader2, X as IconX, ChevronLeft, ChevronRight, CameraOff, Search } from 'lucide-react'; // Iconos necesarios

// Estilos CSS para el Lightbox (Modal) - Añadir a tu CSS global
/*
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75); // Fondo oscuro semi-transparente
  backdrop-filter: blur(8px); // Efecto blur para el fondo
  z-index: 50; // Asegura que esté por encima de otros elementos
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem; // Espacio alrededor
  opacity: 0; // Estado inicial para animación
  transition: opacity 0.3s ease-in-out; // Animación fade-in/out
}

.lightbox-backdrop.open {
  opacity: 1; // Estado visible
}

.lightbox-content {
  position: relative;
  background-color: #fff; // Fondo del contenedor de la imagen
  border-radius: 0.5rem; // Bordes redondeados
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); // Sombra
  max-width: 90%;
  max-height: 90%;
  overflow: hidden; // Evita que la imagen se salga
  transform: scale(0.95); // Estado inicial para animación
  transition: transform 0.3s ease-in-out; // Animación scale-up/down
}

.lightbox-backdrop.open .lightbox-content {
  transform: scale(1); // Estado visible
}

.lightbox-content img {
  display: block;
  width: auto; // Ancho automático
  height: auto; // Altura automática
  max-width: 100%; // Máximo ancho del contenedor
  max-height: 85vh; // Máxima altura relativa a la ventana
  object-fit: contain; // Asegura que se vea completa sin distorsión
}

.lightbox-close-button {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  z-index: 60; // Por encima de la imagen
}

.lightbox-close-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
*/

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Para el Lightbox
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Imágenes por página

  // Función para cargar imágenes (mejor usar useCallback si se pasa a otros componentes)
  const fetchImages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const imagesRef = ref(storage, 'images/');
      const imagesList = await listAll(imagesRef);
      // Ordenar por nombre si refleja fecha, o simplemente tomar todos
      // Nota: Para ordenar por fecha real, Firebase Storage requiere metadatos.
      // Aquí asumimos que el orden de listAll es suficiente o no crítico.
      const urls = await Promise.all(
        imagesList.items.map(item => getDownloadURL(item))
      );
      setImages(urls); // Guardar todas las URLs
    } catch (err) {
      console.error("Error fetching gallery images:", err);
      setError("No se pudieron cargar las imágenes. Inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect para llamar a fetchImages al montar
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // --- Lógica de Paginación ---
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  // Asegúrate que `images` es un array antes de usar slice
  const currentImages = Array.isArray(images) ? images.slice(indexOfFirstImage, indexOfLastImage) : [];
  const totalPages = Array.isArray(images) ? Math.ceil(images.length / imagesPerPage) : 0;

  // Funciones para cambiar de página
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll al inicio al cambiar página
    }
  };

  // --- Lógica del Lightbox ---
  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Componente para los botones de paginación individuales
  const PageButton: React.FC<{ page: number; isActive: boolean; onClick: () => void }> =
    ({ page, isActive, onClick }) => (
      <button
        onClick={onClick}
        className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
        ${isActive
          ? 'bg-blue-600 text-white shadow-md scale-105' // Estilo activo
          : 'bg-white text-slate-700 hover:bg-blue-100 hover:text-blue-700 border border-slate-200' // Estilo inactivo
        }`}
      >
        {page}
      </button>
  );

  // Componente para botones Prev/Next
  const NavButton: React.FC<{ direction: 'prev' | 'next'; onClick: () => void; isDisabled: boolean }> =
    ({ direction, onClick, isDisabled }) => (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`h-10 px-3 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ease-in-out border border-slate-200
      ${isDisabled
        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' // Estilo deshabilitado
        : 'bg-white text-slate-700 hover:bg-blue-100 hover:text-blue-700' // Estilo habilitado
      }`}
    >
      {direction === 'prev' ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  );


  return (
    // Contenedor principal con fondo gradiente y padding
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen pt-24 sm:pt-28 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título de la Sección */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Galería de Momentos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explora los momentos capturados de nuestros entrenamientos, juegos y eventos especiales.
          </p>
        </div>

        {/* Contenido Principal: Grid de Imágenes o Estados */}
        {loading ? (
          // Estado de Carga
          <div className="flex flex-col items-center justify-center text-center py-20">
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-500 text-lg">Cargando galería...</p>
          </div>
        ) : error ? (
          // Estado de Error
          <div className="flex flex-col items-center justify-center text-center py-20 bg-red-50 border border-red-200 rounded-lg p-6">
             <CameraOff className="h-12 w-12 text-red-500 mb-4" />
             <p className="text-red-700 text-lg font-medium">¡Oops! Algo salió mal</p>
             <p className="text-red-600">{error}</p>
          </div>
        ) : images.length === 0 ? (
           // Estado Vacío
           <div className="flex flex-col items-center justify-center text-center py-20 bg-slate-100 border border-slate-200 rounded-lg p-6">
             <CameraOff className="h-12 w-12 text-slate-400 mb-4" />
             <p className="text-slate-500 text-lg">Aún no hay imágenes en la galería.</p>
           </div>
        ) : (
          // Grid de Imágenes y Paginación
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {currentImages.map((url, index) => (
                <div
                  key={`${currentPage}-${index}`} // Clave más única si las URLs pueden repetirse entre cargas
                  className="aspect-square relative overflow-hidden rounded-lg shadow-md group cursor-pointer bg-slate-200" // Añadido bg-slate-200 como placeholder
                  onClick={() => openLightbox(url)}
                >
                  <img
                    src={url}
                    alt={`Imagen de galería ${indexOfFirstImage + index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Sutil scale en hover
                    loading="lazy"
                  />
                  {/* Overlay sutil en hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 ease-in-out flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <Search className="h-8 w-8 text-white/80 transform scale-75 group-hover:scale-100 transition-transform duration-300" /> {/* Icono de Zoom/Ver */}
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de Paginación Modernizados */}
            {totalPages > 1 && (
               <div className="flex justify-center items-center mt-12 lg:mt-16 space-x-2 sm:space-x-3">
                  {/* Botón Anterior */}
                  <NavButton
                     direction="prev"
                     onClick={() => handlePageChange(currentPage - 1)}
                     isDisabled={currentPage === 1}
                  />

                  {/* Botones de Páginas Numéricas */}
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PageButton
                      key={i}
                      page={i + 1}
                      isActive={currentPage === i + 1}
                      onClick={() => handlePageChange(i + 1)}
                    />
                  ))}

                  {/* Botón Siguiente */}
                  <NavButton
                     direction="next"
                     onClick={() => handlePageChange(currentPage + 1)}
                     isDisabled={currentPage === totalPages}
                  />
               </div>
            )}
          </>
        )}

      </div> {/* Fin max-w-7xl */}

      {/* Lightbox (Modal) */}
      {selectedImage && (
        <div
          className={`lightbox-backdrop ${selectedImage ? 'open' : ''}`} // Controla visibilidad con clase 'open'
          onClick={closeLightbox} // Cierra al hacer clic en el fondo
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
          >
            <button
              className="lightbox-close-button"
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              <IconX className="h-5 w-5" />
            </button>
            <img src={selectedImage} alt="Vista ampliada" />
          </div>
        </div>
      )}

    </div> // Fin contenedor principal
  );
};

export default Gallery;