import React, { useEffect, useState } from 'react';
import { storage } from '../config/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Users, Building, ClipboardList, Loader2, UserCircle, Mail, Phone, Trophy, Award, Activity, BarChart2, Image as ImageIcon } from 'lucide-react';

import joelLogo from '../assets/images/joellogo.jpg';
import joelpic from "../assets/images/joel.jpg";
import fieldBg from "../assets/images/baseballfield.png";

const Home: React.FC = () => {
  const [recentImages, setRecentImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecentImages = async () => {
      setLoading(true);
      try {
        const imagesRef = ref(storage, 'images/');
        const imagesList = await listAll(imagesRef);
        const lastFiveItems = imagesList.items.slice(-5);
        const urls = await Promise.all(
          lastFiveItems.map(item => getDownloadURL(item))
        );
        setRecentImages(urls.reverse());
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentImages();
  }, []);

  const FOUNDER_NAME = "Orlando de León";
  const FOUNDER_DESCRIPTION = "Fundador de la academia con más de 20 años de experiencia en el béisbol profesional. Su visión es crear un espacio donde los jóvenes desarrollen no solo habilidades deportivas, sino también valores de disciplina, trabajo en equipo y excelencia.";
  const COACH_NAME = "Joel Lopez Taveras";
  const COACH_DESCRIPTION = "Entrenador certificado con especialización en desarrollo de talento juvenil. Su metodología combina técnicas modernas con fundamentos tradicionales para maximizar el potencial de cada atleta.";

  return (
    <div className="min-h-screen bg-white pt-20"> {/* Añadido pt-16 para el navbar */}
    
      {/* Hero Section */}
    
<section className="relative h-screen flex items-center justify-center overflow-hidden pt-16"> {/* Añade pt-16 */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{ 
      backgroundImage: `url(${fieldBg})`,
      backgroundAttachment: 'fixed'
    }}
  ></div>
  
  {/* Ajusta este div contenedor del contenido */}
  <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full"> {/* Quita mt-4 y añade w-full */}
    <div className="mb-8 flex justify-center">
      <img
        src={joelLogo}
        alt="Logo Academia"
        className="h-28 w-28 md:h-36 md:w-36 object-cover rounded-full shadow-2xl border-4 border-white/80"
      />
    </div>
    
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white"> {/* Reduce tamaño de texto */}
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
        Academia de Béisbol
      </span>
      <span className="block text-white mt-1 text-3xl sm:text-4xl lg:text-5xl"> {/* Ajusta tamaño secundario */}
        Orlando de León
      </span>
    </h1>
    
    <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed"> {/* Reduce margen inferior */}
      Formando campeones dentro y fuera del diamante
    </p>
    
    {/* Contenedor específico para los botones con margen superior */}
    <div className="mt-3 mb-10"> {/* Añade margen superior */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center"> {/* Reduce gap */}
        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105">
          Únete Ahora
        </button>
        <button className="px-6 py-2.5 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all transform hover:scale-105">
          Conoce Más
        </button>
      </div>
    </div>
  </div>
  
  <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center animate-bounce">
    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-blue-100/70 -rotate-1 transform -skew-x-6"></span>
                <span className="relative text-blue-600">Momentos</span>
              </span> 
              <span className="text-slate-800"> Destacados</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Capturas de nuestros entrenamientos, juegos y eventos especiales
            </p>
          </div>

          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center bg-slate-100 rounded-2xl shadow-inner">
              <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
              <p className="text-slate-500 text-lg">Cargando momentos inolvidables...</p>
            </div>
          ) : recentImages.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              loop={recentImages.length > 1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              effect={'fade'}
              fadeEffect={{ crossFade: true }}
              className="h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {recentImages.map((url, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <img
                      src={url}
                      alt={`Momento destacado ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white font-medium text-lg">Entrenamiento {index + 1}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-96 flex items-center justify-center bg-slate-100 rounded-2xl shadow-inner">
              <div className="text-center">
                <ImageIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 text-lg">Pronto tendremos imágenes para compartir</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
              Nuestra metodología
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Excelencia en cada aspecto del juego
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Un enfoque integral que desarrolla habilidades técnicas, tácticas, físicas y mentales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 hover:border-blue-200/50">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Fundamentos sólidos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dominio de las técnicas básicas y avanzadas para cada posición en el campo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 hover:border-blue-200/50">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Mentalidad ganadora</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Desarrollo de fortaleza mental, concentración y capacidad para superar desafíos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 hover:border-blue-200/50">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Preparación física</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Programas personalizados de fuerza, velocidad, agilidad y resistencia.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 hover:border-blue-200/50">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Análisis de rendimiento</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tecnología y métricas para evaluar y mejorar el desempeño constantemente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider">Años de experiencia</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm uppercase tracking-wider">Atletas formados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider">En ligas profesionales</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider">Compromiso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Conoce a nuestro 
              <span className="relative ml-2">
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-200/60 -z-10"></span>
                <span className="relative">equipo</span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Profesionales apasionados por el desarrollo de talento beisbolero
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center">
                <UserCircle className="h-32 w-32 text-white/90" strokeWidth={1} />
                <div className="absolute bottom-4 right-4 bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Fundador
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{FOUNDER_NAME}</h3>
                <p className="text-slate-600 mb-4">{FOUNDER_DESCRIPTION}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Coach */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64">
                <img 
                  src={joelpic} 
                  alt={COACH_NAME}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Entrenador Principal
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{COACH_NAME}</h3>
                <p className="text-slate-600 mb-4">{COACH_DESCRIPTION}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para llevar tu juego al siguiente nivel?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Únete a nuestra academia y comienza tu viaje hacia la excelencia beisbolera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Contáctanos
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Llámanos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;