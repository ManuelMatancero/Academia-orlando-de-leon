import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/joellogo.jpg"; // Asegúrate que la ruta sea correcta

// Añade ': React.FC' para tipar el componente funcional en TypeScript
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Tipado explícito para el estado
  const [isVisible, setIsVisible] = useState<boolean>(true); // Tipado explícito
  const lastScrollY = useRef<number>(0); // Tipado explícito para el ref

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/gallery", label: "Galería" },
    { to: "/story", label: "Historia" },
    { to: "/donate", label: "Donaciones" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else {
        // Usamos una pequeña 'debounce' o umbral para evitar cambios rápidos en scroll muy corto
        if (currentScrollY > lastScrollY.current + 5) { // Ocultar solo si baja más de 5px
          setIsVisible(false);
          // Solo cierra el menú si estaba abierto Y la navbar se está ocultando
          setIsOpen(prevOpen => (prevOpen ? false : prevOpen));
        } else if (currentScrollY < lastScrollY.current - 5) { // Mostrar si sube más de 5px
          setIsVisible(true);
        }
      }
      // Actualizar solo si el cambio es significativo para evitar actualizaciones constantes del ref
      if (Math.abs(currentScrollY - lastScrollY.current) > 5 || currentScrollY <= 10) {
         lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // No añadir dependencias aquí para que se ejecute solo al montar/desmontar
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    // Navbar principal
    // Se eliminaron los comentarios DENTRO de los ${...}
    <nav className={`
      bg-[#071f43] backdrop-blur-md shadow-lg ring-1 ring-white/10
      fixed top-0 left-0 right-0 z-50
      transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      {/* Comentario movido aquí: La clase anterior aplica la transformación para ocultar/mostrar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo y Nombre */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt="Logo Academia Orlando de León" className="h-10 w-auto" />
            <span className="text-white font-bold text-lg sm:text-xl tracking-wide group-hover:text-blue-200 transition-colors duration-200">
              Academia Orlando de León
            </span>
          </NavLink>

          {/* Navegación Desktop */}
          <div className="hidden md:flex gap-8 font-medium items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                // Usar una función para className es más limpio en TSX
                className={({ isActive }) =>
                  `relative transition-colors duration-200 group pb-1 ${
                    isActive
                      ? "text-blue-300 font-semibold"
                      : "text-white hover:text-blue-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-400 transition-all duration-300 ease-out ${
                        isActive ? "w-full opacity-100" : "w-0 group-hover:w-full opacity-50 group-hover:opacity-100"
                      }`}
                      aria-hidden="true"
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 p-1 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              type="button" // Buena práctica añadir type="button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          bg-[#0a2a58]/90 backdrop-blur-md shadow-lg
          ${isOpen && isVisible ? "max-h-60 opacity-100 border-t border-white/10" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col px-4 pb-4 pt-2 space-y-3 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              // Usar una función para className es más limpio en TSX
              className={({ isActive }) =>
                `block py-2 transition-colors duration-200 ${
                  isActive ? "text-blue-300 font-semibold" : "text-white hover:text-blue-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;