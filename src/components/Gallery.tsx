import React, { useState, useEffect, useCallback } from 'react';
import { Loader2, X as IconX, ChevronLeft, ChevronRight, CameraOff, Search } from 'lucide-react';

// --- IMPORTANTE ---
// Asumo que estas rutas son correctas según la estructura de tu proyecto.
// React se encargará de procesar estas imágenes.
import leon1 from '../assets/images/leon1.jpg';
import leon2 from '../assets/images/leon2.jpg';
import leon3 from '../assets/images/leon3.jpg';
import leon4 from '../assets/images/leon4.jpg';
import leon5 from '../assets/images/leon5.jpg';
import leon6 from '../assets/images/leon6.jpg';
import leon7 from '../assets/images/leon7.jpg';
import leon8 from '../assets/images/leon8.jpg';
import leon9 from '../assets/images/leon9.jpg';
import leon10 from '../assets/images/10.jpg';
import leon11 from '../assets/images/11.jpg';
import leon12 from '../assets/images/12.jpg';
import leon13 from '../assets/images/13.jpg';
import leon14 from '../assets/images/14.jpg';
import leon15 from '../assets/images/15.jpg';
import leon16 from '../assets/images/16.jpg';
import leon17 from '../assets/images/17.jpg';
import leon18 from '../assets/images/18.jpg';
import leon19 from '../assets/images/19.jpg';
import leon20 from '../assets/images/20.jpg';
import leon21 from '../assets/images/21.jpg';
import leon22 from '../assets/images/22.jpg';
import leon23 from '../assets/images/23.jpg';
import leon24 from '../assets/images/24.jpg';
import leon25 from '../assets/images/25.jpg';
import leon26 from '../assets/images/26.jpg';
import leon27 from '../assets/images/27.jpg';
import leon28 from '../assets/images/28.jpg';

// --- Componente principal de la Galería ---
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Carga de las imágenes locales importadas
  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      // Usamos las imágenes locales importadas
     const localImages = [
  leon1, leon2, leon3, leon4, leon5, leon6, leon7, leon8, leon9,
  leon10, leon11, leon12, leon13, leon14, leon15, leon16, leon17,
  leon18, leon19, leon20, leon21, leon22, leon23, leon24, leon25,
  leon26, leon27, leon28
];
      // Si tienes más de 9 imágenes, simplemente añádelas al array de arriba.
      // Para propósitos de paginación, voy a duplicar algunas para mostrar cómo funciona.
      const exampleImages = [...localImages, ...localImages.slice(0, 5)]; // Total de 14 para el ejemplo
      
      setImages(exampleImages);

    } catch (err) {
      console.error("Error loading local images:", err);
      setError("No se pudieron cargar las imágenes locales. Verifica las rutas de importación.");
    } finally {
      // Simular un pequeño retraso de carga para ver el spinner
      setTimeout(() => setLoading(false), 500);
    }
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, closeLightbox]);

  // --- Sub-componentes para Botones de Paginación ---
  const PageButton = ({ page, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300
      ${isActive
          ? 'bg-indigo-500 text-white shadow-lg scale-110'
          : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20 hover:text-white'
        }`}
    >
      {page}
    </button>
  );

  const NavButton = ({ direction, onClick, isDisabled }) => (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`h-10 px-3 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200
      ${isDisabled
          ? 'bg-white bg-opacity-5 text-gray-600 cursor-not-allowed'
          : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20 hover:text-white'
        }`}
    >
      {direction === 'prev' ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  );

  return (
    <div className="relative min-h-screen pt-20 w-full bg-[#111827] font-sans text-gray-800 overflow-hidden">
      {/* Contenedor de las auroras animadas (fondo) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="aurora-blob one"></div>
        <div className="aurora-blob two"></div>
        <div className="aurora-blob three"></div>
        <div className="aurora-blob four"></div>
      </div>

      {/* Contenido principal de la página */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 animate-fade-in-down">
              Galería de Momentos
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-down" style={{ animationDelay: '200ms' }}>
              Explora los momentos de nuestros entrenamientos, juegos y eventos especiales.
            </p>
          </div>

          {/* Estados de Carga, Error y Vacío */}
          {loading ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <Loader2 className="h-12 w-12 text-indigo-400 animate-spin mb-4" />
              <p className="text-gray-400 text-lg">Cargando galería...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-6">
              <CameraOff className="h-12 w-12 text-red-400 mb-4" />
              <p className="text-red-300 text-lg font-medium">¡Oops! Algo salió mal</p>
              <p className="text-red-400 mt-1">{error}</p>
            </div>
          ) : images.length === 0 ? (
             <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-800 bg-opacity-30 border border-gray-700 rounded-lg p-6">
              <CameraOff className="h-12 w-12 text-gray-500 mb-4" />
              <p className="text-gray-400 text-lg">Aún no hay imágenes en la galería.</p>
            </div>
          ) : (
            <>
              {/* Grid de Imágenes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                {currentImages.map((url, index) => (
                  <div
                    key={`${currentPage}-${index}`}
                    className="aspect-square relative overflow-hidden rounded-lg shadow-lg group cursor-pointer bg-gray-900 animate-fade-in-up"
                    onClick={() => openLightbox(url)}
                    style={{ animationDelay: `${100 + index * 50}ms` }}
                  >
                    <img
                      src={url}
                      alt={`Imagen de galería ${indexOfFirstImage + index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Search className="h-8 w-8 text-white/80 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 lg:mt-16 space-x-2 sm:space-x-3 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                  <NavButton direction="prev" onClick={() => handlePageChange(currentPage - 1)} isDisabled={currentPage === 1} />
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PageButton key={`page-${i + 1}`} page={i + 1} isActive={currentPage === i + 1} onClick={() => handlePageChange(i + 1)} />
                  ))}
                  <NavButton direction="next" onClick={() => handlePageChange(currentPage + 1)} isDisabled={currentPage === totalPages} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Lightbox (Modal) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-10 w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full text-white transition-all"
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              <IconX className="h-6 w-6" />
            </button>
            <img src={selectedImage} alt="Vista ampliada" className="w-auto h-auto max-w-full max-h-[90vh] object-contain" />
          </div>
        </div>
      )}

      {/* Estilos para las animaciones y el fondo de aurora */}
      <style jsx global>{`
        .aurora-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; will-change: transform, opacity, filter; }
        .aurora-blob.one { width: 500px; height: 500px; background-color: #4f46e5; top: -150px; left: -100px; animation: moveOne 20s infinite alternate; }
        .aurora-blob.two { width: 450px; height: 450px; background-color: #db2777; top: 100px; right: -200px; animation: moveTwo 22s infinite alternate; }
        .aurora-blob.three { width: 400px; height: 400px; background-color: #f59e0b; bottom: -100px; left: 20%; animation: moveThree 24s infinite alternate; }
        .aurora-blob.four { width: 300px; height: 300px; background-color: #10b981; bottom: 50px; right: 10%; animation: moveFour 26s infinite alternate; }
        @keyframes moveOne { from { transform: translate(-100px, -50px) rotate(-30deg); } to { transform: translate(100px, 80px) rotate(40deg); } }
        @keyframes moveTwo { from { transform: translate(50px, -80px) rotate(20deg); } to { transform: translate(-120px, 100px) rotate(-50deg); } }
        @keyframes moveThree { from { transform: translate(-80px, 100px) rotate(-40deg); } to { transform: translate(60px, -50px) rotate(30deg); } }
        @keyframes moveFour { from { transform: translate(100px, 50px) rotate(50deg); } to { transform: translate(-50px, -100px) rotate(-20deg); } }
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out both; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out both; }
        .animate-fade-in { animation: fade-in 0.3s ease-in-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-in-out; }
      `}</style>
    </div>
  );
};

export default Gallery;