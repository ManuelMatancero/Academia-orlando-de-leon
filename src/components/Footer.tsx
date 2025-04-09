import React from 'react';
// Importa los iconos necesarios
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
// Importa el logo
import joelLogo from '../assets/images/joellogo.jpg'; // **¡Ajusta la ruta si es necesario!**

// Componente Footer
const Footer: React.FC = () => {
  // --- Configuración / Placeholders ---
  const academyName = "Academia Orlando de León";
  const academySlogan = "Forjando el talento del mañana con dedicación y disciplina hoy."; // O un slogan corto
  const address = "Dirección Ejemplo 123, Nagua, Rep. Dom."; // Usando ubicación del contexto
  const phone = "+1-809-XXX-XXXX"; // ** REEMPLAZAR **
  const email = "info@academiaorlandoleon.com"; // ** REEMPLAZAR **
  const facebookUrl = "#"; // ** REEMPLAZAR con tu URL real **
  const twitterUrl = "#"; // ** REEMPLAZAR con tu URL real **
  const instagramUrl = "#"; // ** REEMPLAZAR con tu URL real **
  const currentYear = new Date().getFullYear();
  // --- Fin Configuración ---

  // Componente reutilizable para links de redes sociales
  const SocialLink: React.FC<{ href: string; icon: React.ElementType; label: string }> =
    ({ href, icon: Icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 bg-white/10 rounded-full text-slate-300 hover:bg-white/20 hover:text-white transition-colors duration-200"
    >
      <Icon className="h-5 w-5" /> {/* Tamaño iconos sociales */}
    </a>
  );

  return (
    <footer className="bg-[#071f43]"> {/* Fondo azul oscuro del Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"> {/* Padding ajustado */}

        {/* Grid principal del Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">

          {/* Columna 1: Logo y Descripción */}
          <div className="sm:col-span-2 lg:col-span-1"> {/* Ocupa más en sm */}
            <img
              src={joelLogo}
              alt={`Logo ${academyName}`}
              className="h-16 w-auto mb-4 rounded-md" // Logo más grande y con borde suave
            />
            <h3 className="text-lg font-semibold text-white mb-2">{academyName}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {academySlogan}
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Inicio</a></li>
              <li><a href="/gallery" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Galería</a></li>
              <li><a href="/story" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Historia</a></li>
              <li><a href="/donate" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Donaciones</a></li>
              {/* Añade más enlaces si es necesario */}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
             <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">Contacto</h4>
             <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-slate-500" />
                <span>{address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-slate-500" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors duration-200">{phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-slate-500" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors duration-200">{email}</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
             <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">Síguenos</h4>
             <div className="flex space-x-3"> {/* Espacio entre iconos */}
                <SocialLink href={facebookUrl} icon={Facebook} label="Facebook de la Academia" />
                <SocialLink href={twitterUrl} icon={Twitter} label="Twitter de la Academia" />
                <SocialLink href={instagramUrl} icon={Instagram} label="Instagram de la Academia" />
                {/* Añade más redes si es necesario */}
            </div>
          </div>

        </div> {/* Fin del grid principal */}

        {/* Separador y Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} {academyName}. Todos los derechos reservados. <span className="hidden sm:inline">|</span> <span className="block sm:inline mt-1 sm:mt-0">Nagua, Rep. Dom.</span>
          </p>
          {/* Podrías añadir links a Política de Privacidad / Términos aquí si los tienes */}
          {/* <p className="text-xs text-slate-500 mt-2">
            <a href="/privacy" className="hover:text-slate-300">Política de Privacidad</a> | <a href="/terms" className="hover:text-slate-300">Términos de Servicio</a>
          </p> */}
        </div>

      </div> {/* Fin max-w-7xl */}
    </footer>
  );
};

export default Footer;