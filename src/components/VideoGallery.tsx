import React, { useState } from 'react';
import { Youtube, Facebook, Instagram, ArrowRight } from 'lucide-react';

// Componente para una tarjeta de red social individual
// Incluye un efecto de brillo que sigue al cursor y animaciones 3D.
const SocialCard = ({ icon, platform, handle, url, colors }) => {
  const [shineStyle, setShineStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const shineX = (x / width) * 100;
    const shineY = (y / height) * 100;

    setShineStyle({
      background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.25), transparent 40%)`,
    });
  };

  const handleMouseLeave = () => {
    setShineStyle({});
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-2 hover:scale-105 ${colors.gradient} ${colors.text} will-change-transform`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="absolute inset-0 transition-all duration-500 ease-out z-10" 
        style={shineStyle}
      ></div>
      <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transform group-hover:scale-110 transition-all duration-500 ease-out z-0">
        {React.cloneElement(icon, { size: 128, strokeWidth: 1.5 })}
      </div>
      <div className="relative z-20">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-full ${colors.iconBg}`}>
            {React.cloneElement(icon, { size: 28, strokeWidth: 2 })}
          </div>
          <h2 className="text-2xl font-bold tracking-wide">{platform}</h2>
        </div>
        <p className={`text-lg opacity-90 font-medium mb-6`}>{handle}</p>
      </div>
      <div className="relative z-20 flex items-center font-semibold mt-auto text-sm uppercase tracking-wider">
        Visitar perfil
        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </a>
  );
};

// --- Componente principal de la página de Redes ---
const App = () => {
  const socialLinks = [
    {
      platform: 'YouTube',
      handle: 'Canal Oficial',
      url: 'https://www.youtube.com/channel/UCUtTLl-Kd5Ucpgl0bHJE8zg',
      icon: <Youtube />,
      colors: {
        gradient: 'bg-gradient-to-br from-red-500 to-red-700',
        text: 'text-white',
        iconBg: 'bg-white bg-opacity-20',
      },
    },
    // {
    //   platform: 'Facebook',
    //   handle: 'Página Oficial',
    //   url: 'https://www.facebook.com/tupagina',
    //   icon: <Facebook />,
    //   colors: {
    //     gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
    //     text: 'text-white',
    //     iconBg: 'bg-white bg-opacity-20',
    //   },
    // },
    // {
    //   platform: 'Instagram',
    //   handle: '@tuUsuario',
    //   url: 'https://www.instagram.com/tucuenta',
    //   icon: <Instagram />,
    //   colors: {
    //     gradient: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
    //     text: 'text-white',
    //     iconBg: 'bg-white bg-opacity-20',
    //   },
    // },
  ];

  return (
    // Contenedor principal con fondo oscuro
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
              Conecta con Nosotros
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-down" style={{animationDelay: '200ms'}}>
              Síguenos en nuestras plataformas para no perderte ninguna novedad, evento o contenido exclusivo.
            </p>
          </div>

          {/* Contenedor de las tarjetas con animación escalonada */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {socialLinks.map((social, index) => (
              <div 
                key={social.platform} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <SocialCard
                  platform={social.platform}
                  handle={social.handle}
                  url={social.url}
                  icon={social.icon}
                  colors={social.colors}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos para las animaciones y el fondo de aurora */}
      <style jsx global>{`
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          will-change: transform, opacity, filter;
        }
        .aurora-blob.one {
          width: 500px;
          height: 500px;
          background-color: #4f46e5; /* Indigo */
          top: -150px;
          left: -100px;
          animation: moveOne 20s infinite alternate;
        }
        .aurora-blob.two {
          width: 450px;
          height: 450px;
          background-color: #db2777; /* Pink */
          top: 100px;
          right: -200px;
          animation: moveTwo 22s infinite alternate;
        }
        .aurora-blob.three {
          width: 400px;
          height: 400px;
          background-color: #f59e0b; /* Amber */
          bottom: -100px;
          left: 20%;
          animation: moveThree 24s infinite alternate;
        }
         .aurora-blob.four {
          width: 300px;
          height: 300px;
          background-color: #10b981; /* Emerald */
          bottom: 50px;
          right: 10%;
          animation: moveFour 26s infinite alternate;
        }

        @keyframes moveOne {
          from { transform: translate(-100px, -50px) rotate(-30deg); }
          to { transform: translate(100px, 80px) rotate(40deg); }
        }
        @keyframes moveTwo {
          from { transform: translate(50px, -80px) rotate(20deg); }
          to { transform: translate(-120px, 100px) rotate(-50deg); }
        }
        @keyframes moveThree {
          from { transform: translate(-80px, 100px) rotate(-40deg); }
          to { transform: translate(60px, -50px) rotate(30deg); }
        }
        @keyframes moveFour {
          from { transform: translate(100px, 50px) rotate(50deg); }
          to { transform: translate(-50px, -100px) rotate(-20deg); }
        }
        
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default App;
