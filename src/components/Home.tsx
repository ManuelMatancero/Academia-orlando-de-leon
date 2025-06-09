import React, { useEffect, useState } from 'react';
// import { storage } from '../config/firebase'; // Comentado: No usaremos Firebase Storage por ahora
// import { ref, listAll, getDownloadURL } from 'firebase/storage'; // Comentado: No usaremos Firebase Storage por ahora
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import Lucide Icons
import {
  Loader2,
  Mail,
  Phone,
  Trophy,
  Award,
  Activity,
  BarChart2,
  Image as ImageIcon,
  ArrowDown,
  UserCircle
} from 'lucide-react';

// Import local assets
import joelLogo from '../assets/images/joellogo.png';
import joelpic from "../assets/images/joel.jpg";
import fieldBg from "../assets/images/baseballfield.png";
import leon from '../assets/images/leon.jpg';

// Nuevas imágenes importadas para Momentos Destacados
import leon4 from '../assets/images/leon4.jpg';
import leon5 from '../assets/images/leon5.jpg';
import leon6 from '../assets/images/leon6.jpg';
import leon7 from '../assets/images/leon7.jpg';
import leon8 from '../assets/images/leon8.jpg';
import leon9 from '../assets/images/leon9.jpg';


// Reusable Feature Card Component
interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-200 hover:border-blue-300 transform hover:-translate-y-1">
    <div className="bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-sm">
      {React.cloneElement(icon, {
        className: "h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300",
        strokeWidth: 1.5
      })}
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);


const Home: React.FC = () => {
  // Estado para las imágenes de la galería, ahora se poblará con imágenes locales.
  const [recentImages, setRecentImages] = useState<string[]>([]);
  // El estado de carga ya no es tan relevante para imágenes locales, pero se mantiene la estructura por si se reactiva Firebase.
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // --- Funcionalidad de carga de imágenes desde Firebase Storage (Comentada) ---
    /*
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
        console.error("Error fetching images from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentImages();
    */

    // --- Usar imágenes locales importadas ---
    const localImages = [
      leon4,
      leon5,
      leon6,
      leon7,
      leon8,
      leon9,
    ];
    setRecentImages(localImages);
    setLoading(false); // Las imágenes locales se cargan "instantáneamente"

  }, []); // El array de dependencias vacío asegura que esto se ejecute solo una vez al montar el componente.

  const FOUNDER_NAME = "Orlando de León";
  const FOUNDER_DESCRIPTION = "Fundador de la academia con más de 20 años de experiencia en el béisbol profesional. Su visión es crear un espacio donde los jóvenes desarrollen no solo habilidades deportivas, sino también valores de disciplina, trabajo en equipo y excelencia.";
  const COACH_NAME = "Joel Lopez Taveras";
  const COACH_DESCRIPTION = "Entrenador certificado con especialización en desarrollo de talento juvenil. Su metodología combina técnicas modernas con fundamentos tradicionales para maximizar el potencial de cada atleta.";

  const teamMembers = [
    {
      name: FOUNDER_NAME,
      role: "Fundador & Director",
      description: FOUNDER_DESCRIPTION,
      image: leon,
      altText: `Fotografía de ${FOUNDER_NAME}, Fundador de la Academia.`
    },
    {
      name: COACH_NAME,
      role: "Entrenador Principal",
      description: COACH_DESCRIPTION,
      image: joelpic,
      altText: `Fotografía de ${COACH_NAME}, Entrenador Principal de la Academia.`
    }
  ];

  const statsData = [
    { value: "15+", label: "Años de Experiencia" },
    { value: "68+", label: "Atletas Formados" },
    { value: "10+", label: "En Ligas Profesionales" },
    { value: "100%", label: "Compromiso y Pasión" }
  ];


  return (
    <div className="min-h-screen bg-white pt-20 selection:bg-blue-600 selection:text-white">

      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${fieldBg})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>

        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full">
          <div className="mb-8 flex justify-center">
            <img
              src={joelLogo}
              alt="Logo Academia Orlando de León"
              className="bg-white/90 h-28 w-28 md:h-36 md:w-36 object-cover rounded-full shadow-xl border-4 border-white/70"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">
              Academia de Béisbol
            </span>
            <span className="block text-white mt-1 text-3xl sm:text-4xl lg:text-5xl">
              Orlando de León
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Formando campeones dentro y fuera del diamante
          </p>

          <div className="mt-6 mb-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Únete Ahora
              </button>
              <button className="px-7 py-3 bg-transparent border-2 border-slate-200 text-slate-100 font-semibold rounded-lg hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50">
                Conoce Más
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/80" />
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-blue-100/70 -rotate-2 transform -skew-x-3 -translate-y-1 translate-x-1 block w-[105%] h-[110%] -z-10 rounded-sm"></span>
                <span className="relative text-blue-600">Momentos</span>
              </span>
              <span className="text-slate-800"> Destacados</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Capturas de nuestros entrenamientos, juegos y eventos especiales.
            </p>
          </div>

          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center bg-slate-100/80 rounded-2xl shadow-inner">
              <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
              <p className="text-slate-600 text-lg">Cargando momentos...</p> {/* Mensaje genérico de carga */}
            </div>
          ) : recentImages.length > 0 ? (
            <div className="relative group">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
                loop={recentImages.length > 1} // Permitir loop si hay más de una imagen
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                className="h-96 sm:h-[550px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80"
              >
                {recentImages.map((url, index) => (
                  <SwiperSlide key={index} className="bg-slate-200">
                    <div className="relative h-full w-full">
                      <img
                        src={url}
                        alt={`Momento destacado de la academia ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        {/* Puedes personalizar este texto si tienes descripciones para cada imagen local */}
                        <p className="text-white font-semibold text-lg drop-shadow-sm">Academia en Acción #{index + 1}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
              </div>
              <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </div>
              <div className="swiper-pagination-custom absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2"></div>
            </div>
          ) : (
            // Este bloque se mostraría si recentImages está vacío y no está cargando.
            // Con imágenes locales, es menos probable que se muestre a menos que el array local esté vacío.
            <div className="h-96 flex items-center justify-center bg-slate-100/80 rounded-2xl shadow-inner">
              <div className="text-center">
                <ImageIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500 text-lg">No hay imágenes destacadas disponibles en este momento.</p>
                <p className="text-slate-400 text-sm mt-1">¡Vuelve a visitarnos pronto!</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4 shadow-sm">
              Nuestra Metodología
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Excelencia en cada aspecto del juego
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un enfoque integral que desarrolla habilidades técnicas, tácticas, físicas y mentales para el éxito sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Trophy />}
              title="Fundamentos Sólidos"
              description="Dominio de las técnicas básicas y avanzadas para cada posición, asegurando una base técnica impecable."
            />
            <FeatureCard
              icon={<Award />}
              title="Mentalidad Ganadora"
              description="Desarrollo de fortaleza mental, concentración, resiliencia y capacidad para superar desafíos bajo presión."
            />
            <FeatureCard
              icon={<Activity />}
              title="Preparación Física Óptima"
              description="Programas personalizados de fuerza, velocidad, agilidad y resistencia, adaptados a cada etapa de desarrollo."
            />
            <FeatureCard
              icon={<BarChart2 />}
              title="Análisis de Rendimiento"
              description="Uso de tecnología y métricas avanzadas para evaluar objetivamente y mejorar el desempeño continuamente."
            />
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 bg-gradient-to-tl from-blue-600 via-sky-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-center">
            {statsData.map(stat => (
              <div key={stat.label} className="p-6 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-default">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-sky-200 drop-shadow">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Conoce a nuestro
              <span className="relative ml-2 inline-block">
                <span className="absolute -bottom-1.5 left-0 w-full h-2.5 bg-blue-200/70 -z-10 transform skew-x-[-6deg] rounded-sm"></span>
                <span className="relative">Equipo Directivo</span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Profesionales apasionados y con vasta experiencia, dedicados al desarrollo integral de cada talento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {teamMembers.map(member => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1.5 flex flex-col">
                <div className="relative h-72 sm:h-80">
                  <img
                    src={member.image}
                    alt={member.altText}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold shadow-md">
                    {member.role}
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 font-medium">{member.role === "Fundador & Director" ? "Más de 20 años en béisbol profesional" : "Especialista en talento juvenil"}</p>
                  <p className="text-slate-600 text-base leading-relaxed mb-5 flex-grow">{member.description}</p>
                  <div className="flex space-x-4 items-center mt-auto pt-4 border-t border-slate-200">
                    <a href="mailto:info@academiadeleon.com" aria-label={`Enviar correo a ${member.name}`} className="text-slate-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1.5 group">
                      <Mail className="h-5 w-5 group-hover:animate-pulse" /> <span className="text-sm">Email</span>
                    </a>
                    <a href="tel:+18091234567" aria-label={`Llamar a ${member.name}`} className="text-slate-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1.5 group">
                      <Phone className="h-5 w-5 group-hover:animate-pulse" /> <span className="text-sm">Teléfono</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UserCircle className="h-16 w-16 text-blue-400 mx-auto mb-6" strokeWidth={1} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">transformar</span> tu juego?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Únete a la Academia Orlando de León y da el primer paso hacia tu futuro en el béisbol profesional. Contáctanos hoy mismo para más detalles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              <Mail className="h-5 w-5 mr-2.5" />
              Solicitar Información
            </button>
            <button className="px-8 py-3.5 bg-transparent border-2 border-slate-400 hover:border-slate-200 text-slate-200 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-75">
              <Phone className="h-5 w-5 mr-2.5" />
              Llámanos Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;