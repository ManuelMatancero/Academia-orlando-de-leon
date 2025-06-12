import React, { useState, useCallback, useEffect } from 'react';
// Se mantienen los íconos para mostrar el estado visual
import { Loader2, X as IconX, PlayCircle, VideoOff } from 'lucide-react'; 
// La importación de YouTube se puede mantener o comentar, ya que no se usa por ahora
// import YouTube from 'react-youtube';

// Importa los estilos del CSS Module
import styles from './VideoGallery.module.css';

// La interfaz se mantiene para cuando se reactive la API
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

const VideoGallery: React.FC = () => {
  // 1. El estado de 'videos' inicia como un array vacío, lo cual es perfecto.
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  // 2. El estado de 'loading' se establece en 'false' desde el inicio.
  const [loading, setLoading] = useState<boolean>(false);
  // El estado de 'error' se mantiene en null.
  const [error, setError] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // --- CONFIGURACIÓN DE YOUTUBE (Comentada temporalmente) ---
   const YOUTUBE_API_KEY = "AIzaSyCuJWhW9ys9mLShK_hPDZ3U7H3QyulDPtA";
   const YOUTUBE_CHANNEL_ID = "UCUtTLl-Kd5Ucpgl0bHJE8zg"; 
   const MAX_RESULTS = 12;

  
  // 3. TODO EL CÓDIGO PARA LLAMAR A LA API (useEffect) SE HA COMENTADO.
  //    Esto evita que el componente intente buscar datos.
  useEffect(() => {
    const fetchVideos = async () => {
      if (!YOUTUBE_API_KEY) {
        setError("La clave de API de YouTube no está configurada. Revisa tu archivo .env");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error en la API: ${response.statusText}`);
        const data = await response.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Error al obtener videos de YouTube:", err);
        setError("No se pudieron cargar los videos. Verifica la clave de API y la conexión.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID]);
  
  
  // Las funciones del Lightbox se conservan para el futuro
  const openLightbox = (videoId: string) => {
    setSelectedVideoId(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedVideoId(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
    };
    if (selectedVideoId) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideoId, closeLightbox]);

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen pt-24 sm:pt-28 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Videoteca</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explora nuestros últimos videos, tutoriales y resúmenes de eventos.
          </p>
        </div>

        {/* --- LÓGICA DE VISUALIZACIÓN --- */}
        {/* Como 'loading' es false y 'error' es null, el código salta directamente a la tercera condición. */}
        {loading ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-500 text-lg">Cargando videos...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center text-center py-20 bg-red-50 border border-red-200 rounded-lg p-6">
            <VideoOff className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-red-700 text-lg font-medium">¡Oops! Algo salió mal</p>
            <p className="text-red-600">{error}</p>
          </div>
        ) : videos.length === 0 ? (
          // ESTA ES LA VISTA QUE SE MOSTRARÁ AHORA
          <div className="flex flex-col items-center justify-center text-center py-20 bg-slate-100 border border-slate-200 rounded-lg p-6">
            <VideoOff className="h-12 w-12 text-slate-400 mb-4" />
            <p className="text-slate-500 text-lg">Aún no hay videos para mostrar.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Este bloque no se renderizará porque videos.length es 0 */}
          </div>
        )}
      </div>

      {/* El Lightbox (Modal) se mantiene pero no será visible */}
      {selectedVideoId && (
        <div
          className={`${styles.lightboxBackdrop} ${selectedVideoId ? styles.lightboxBackdropOpen : ''}`}
          onClick={closeLightbox}
        >
          {/* Contenido del modal */}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;