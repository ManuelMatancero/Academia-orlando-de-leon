import React, { useState, useCallback, useEffect } from 'react';
import { Loader2, X as IconX, PlayCircle, VideoOff } from 'lucide-react';

// Interfaz para definir la estructura de los datos de un video de YouTube
interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

// Componente principal de la galería de videos
const App = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // --- Configuración de la API de YouTube ---
  // Mover estas claves a variables de entorno en una aplicación de producción
  const YOUTUBE_API_KEY = "AIzaSyCuJWhW9ys9mLShK_hPDZ3U7H3QyulDPtA";
  const YOUTUBE_CHANNEL_ID = "UCUtTLl-Kd5Ucpgl0bHJE8zg";
  const MAX_RESULTS = 12; // Número máximo de videos a obtener

  // Efecto para buscar los videos del canal de YouTube cuando el componente se monta
  useEffect(() => {
    const fetchVideos = async () => {
      if (!YOUTUBE_API_KEY) {
        setError("La clave de API de YouTube no está configurada.");
        setLoading(false);
        return;
      }

      try {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`;
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error de la API de YouTube:", errorData);
          throw new Error(`Error en la API: ${errorData.error.message || response.statusText}`);
        }

        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          // Filtra para asegurarse de que solo se procesan elementos con videoId
          const validVideos = data.items.filter((item: any) => item.id.videoId);
          setVideos(validVideos);
        } else {
          setError("No se encontraron videos en el canal o el canal no existe.");
        }
      } catch (err: any) {
        console.error("Error al obtener videos de YouTube:", err);
        setError(err.message || "No se pudieron cargar los videos. Verifica la conexión y la configuración.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID]); // Dependencias del efecto

  // Función para abrir el reproductor de video (lightbox)
  const openLightbox = (videoId: string) => {
    setSelectedVideoId(videoId);
    document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
  };

  // Función para cerrar el lightbox (memorizada con useCallback)
  const closeLightbox = useCallback(() => {
    setSelectedVideoId(null);
    document.body.style.overflow = ''; // Restaura el scroll
  }, []);

  // Efecto para manejar el cierre del lightbox con la tecla "Escape"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    
    if (selectedVideoId) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideoId, closeLightbox]);

  // Renderizado del componente
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Nuestra Videoteca
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explora nuestros últimos videos, tutoriales y resúmenes de eventos directamente desde nuestro canal de YouTube.
            </p>
          </div>

          {/* --- Estado de Carga --- */}
          {loading && (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mb-4" />
              <p className="text-gray-500 text-lg font-medium">Cargando videos...</p>
            </div>
          )}

          {/* --- Estado de Error --- */}
          {error && (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <VideoOff className="h-12 w-12 text-red-500 mb-4" />
              <p className="text-red-800 text-xl font-semibold">¡Oops! Algo salió mal</p>
              <p className="text-red-600 mt-2 text-center">{error}</p>
            </div>
          )}

          {/* --- Galería de Videos --- */}
          {!loading && !error && videos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {videos.map((video) => (
                <div  
                  key={video.id.videoId}  
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => openLightbox(video.id.videoId)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Error+al+cargar+la+imagen'; }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white text-opacity-80 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 text-base leading-snug line-clamp-2">
                      {video.snippet.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* --- Estado Vacío --- */}
          {!loading && !error && videos.length === 0 && (
             <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 border border-gray-200 rounded-lg p-6">
               <VideoOff className="h-12 w-12 text-gray-400 mb-4" />
               <p className="text-gray-500 text-lg font-medium">No hay videos para mostrar.</p>
               <p className="text-gray-400 mt-1">Parece que aún no se han subido videos a este canal.</p>
             </div>
          )}

        </div>
      </div>

      {/* --- Reproductor Lightbox (Modal) --- */}
      {selectedVideoId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el video cierre el modal
          >
            <button  
              className="absolute -top-3 -right-3 sm:top-0 sm:right-0 z-10 m-3 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-200"
              onClick={closeLightbox}
              aria-label="Cerrar reproductor de video"
            >
              <IconX className="h-6 w-6" />
            </button>
            
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
                title="Reproductor de video de YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-in-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;