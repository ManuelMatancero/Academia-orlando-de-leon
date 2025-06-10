import React, { useEffect, useState, useCallback } from 'react'; // useCallback puede ser útil para closeLightbox si se pasa a más hijos
import { Loader2, X as IconX, ChevronLeft, ChevronRight, CameraOff, Search } from 'lucide-react';

// Importa los estilos del CSS Module
import styles from './Gallery.module.css';

// Importaciones de imágenes locales (JPG como en tu código)
import leon1 from '../assets/images/leon1.jpg';
import leon2 from '../assets/images/leon2.jpg';
import leon3 from '../assets/images/leon3.jpg';
import leon4 from '../assets/images/leon4.jpg';
import leon5 from '../assets/images/leon5.jpg';
import leon6 from '../assets/images/leon6.jpg';
import leon7 from '../assets/images/leon7.jpg';
import leon8 from '../assets/images/leon8.jpg';
import leon9 from '../assets/images/leon9.jpg';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const localImages = [
        leon1, leon2, leon3, leon4, leon5, leon6, leon7, leon8, leon9
      ];
      setImages(localImages);
    } catch (err) {
      console.error("Error loading local images:", err);
      setError("No se pudieron cargar las imágenes locales. Verifica las rutas y archivos.");
    } finally {
      setLoading(false);
    }
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = Array.isArray(images) ? images.slice(indexOfFirstImage, indexOfLastImage) : [];
  const totalPages = Array.isArray(images) ? Math.ceil(images.length / imagesPerPage) : 0;

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
  };

  // Usamos useCallback para closeLightbox porque se usa en un useEffect
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // Restaurar scroll del fondo
  }, []);

  // Efecto para cerrar el Lightbox con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    // Limpieza del event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, closeLightbox]); // Dependencias: selectedImage y closeLightbox

  const PageButton: React.FC<{ page: number; isActive: boolean; onClick: () => void }> =
    ({ page, isActive, onClick }) => (
      <button
        onClick={onClick}
        className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
        ${isActive
            ? 'bg-blue-600 text-white shadow-md scale-105'
            : 'bg-white text-slate-700 hover:bg-blue-100 hover:text-blue-700 border border-slate-200'
          }`}
      >
        {page}
      </button>
  );

  const NavButton: React.FC<{ direction: 'prev' | 'next'; onClick: () => void; isDisabled: boolean }> =
    ({ direction, onClick, isDisabled }) => (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`h-10 px-3 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ease-in-out border border-slate-200
      ${isDisabled
          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
          : 'bg-white text-slate-700 hover:bg-blue-100 hover:text-blue-700'
        }`}
    >
      {direction === 'prev' ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  );

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen pt-24 sm:pt-28 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Galería de Momentos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explora los momentos de nuestros entrenamientos, juegos y eventos especiales.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-500 text-lg">Cargando galería...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center text-center py-20 bg-red-50 border border-red-200 rounded-lg p-6">
              <CameraOff className="h-12 w-12 text-red-500 mb-4" />
              <p className="text-red-700 text-lg font-medium">¡Oops! Algo salió mal</p>
              <p className="text-red-600">{error}</p>
          </div>
        ) : images.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-slate-100 border border-slate-200 rounded-lg p-6">
              <CameraOff className="h-12 w-12 text-slate-400 mb-4" />
              <p className="text-slate-500 text-lg">Aún no hay imágenes en la galería.</p>
            </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {currentImages.map((url, index) => (
                <div
                  key={`${currentPage}-${index}-${url}`} // Clave más robusta
                  className="aspect-square relative overflow-hidden rounded-lg shadow-md group cursor-pointer bg-slate-200"
                  onClick={() => openLightbox(url)}
                >
                  <img
                    src={url}
                    alt={`Imagen de galería ${indexOfFirstImage + index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 ease-in-out flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Search className="h-8 w-8 text-white/80 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 lg:mt-16 space-x-2 sm:space-x-3">
                  <NavButton
                      direction="prev"
                      onClick={() => handlePageChange(currentPage - 1)}
                      isDisabled={currentPage === 1}
                  />
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PageButton
                      key={`page-${i + 1}`} // Clave más específica
                      page={i + 1}
                      isActive={currentPage === i + 1}
                      onClick={() => handlePageChange(i + 1)}
                    />
                  ))}
                  <NavButton
                      direction="next"
                      onClick={() => handlePageChange(currentPage + 1)}
                      isDisabled={currentPage === totalPages}
                  />
                </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox (Modal) - Aplicando clases de CSS Modules */}
      {selectedImage && (
        <div
          // Combina la clase base con la clase 'open' condicionalmente
          className={`${styles.lightboxBackdrop} ${selectedImage ? styles.lightboxBackdropOpen : ''}`}
          onClick={closeLightbox}
        >
          <div
            // Combina la clase base del contenido con su clase 'open' condicionalmente
            className={`${styles.lightboxContent} ${selectedImage ? styles.lightboxContentOpen : ''}`}
            onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
          >
            <button
              className={styles.lightboxCloseButton} // Clase del CSS Module para el botón
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              <IconX className="h-5 w-5" /> {/* Clases Tailwind para el ícono se mantienen */}
            </button>
            {/* La imagen dentro de lightboxContent se estiliza mediante el selector descendente en Gallery.module.css */}
            <img src={selectedImage} alt="Vista ampliada" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;