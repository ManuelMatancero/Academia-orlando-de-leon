import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import joelLogo from '../assets/images/joellogo.jpg';

const Footer: React.FC = () => {
  const academyName = "Academia Orlando de León";
  const academySlogan = "Forjando el talento del mañana con dedicación y disciplina hoy.";
  const address = "Dirección Ejemplo 123, Nagua, Rep. Dom.";
  const phone = "+1-809-XXX-XXXX";
  const email = "info@academiaorlandoleon.com";
  const socialLinks = [
    { url: "#", icon: Facebook, label: "Facebook" },
    { url: "#", icon: Twitter, label: "Twitter" },
    { url: "#", icon: Instagram, label: "Instagram" }
  ];
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/gallery", label: "Galería" },
    { path: "/story", label: "Historia" },
    { path: "/donate", label: "Donaciones" }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#071f43] to-[#0a1a36] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Columna Logo y Descripción */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src={joelLogo} 
                alt={`Logo ${academyName}`}
                className="h-20 w-20 rounded-full border-2 border-blue-400/50 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                  {academyName}
                </h3>
                <p className="text-blue-100/80 text-sm mt-1">{academySlogan}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-blue-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-6 pb-2 border-b border-blue-400/20">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path}
                    className="flex items-center text-blue-100/90 hover:text-white group transition-colors duration-200"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-6 pb-2 border-b border-blue-400/20">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <span className="text-blue-100/90">{address}</span>
              </li>
              <li className="flex items-center">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                  <Phone className="h-5 w-5 text-blue-300" />
                </div>
                <a href={`tel:${phone}`} className="text-blue-100/90 hover:text-white transition-colors duration-200">
                  {phone}
                </a>
              </li>
              <li className="flex items-center">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                  <Mail className="h-5 w-5 text-blue-300" />
                </div>
                <a href={`mailto:${email}`} className="text-blue-100/90 hover:text-white transition-colors duration-200">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-blue-400/10 text-center">
          <p className="text-sm text-blue-200/70">
            &copy; {currentYear} {academyName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-blue-400/50 mt-2">
            Diseñado con pasión por el béisbol
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;