import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { Menu, X, Home, Image, BookOpen, HeartHandshake } from "lucide-react";
import logo from "../assets/images/joellogo.jpg";

const NavLinkItem: React.FC<{ to: string; icon: React.ReactNode; children: React.ReactNode }> = ({ to, icon, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
  return (
    <NavLink
      to={to}
      className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
        isActive
          ? "text-white bg-blue-600/20"
          : "text-white/90 hover:text-white hover:bg-white/10"
      }`}
    >
      {icon}
      <span>{children}</span>
      <span className={`absolute left-1/2 -bottom-1 h-0.5 w-4 bg-blue-400 transition-all duration-300 ${
        isActive ? 'opacity-100 -translate-x-1/2' : 'opacity-0 translate-x-0'
      }`}></span>
    </NavLink>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  const navLinks = [
    { to: "/Academia-orlando-de-leon", label: "Inicio", icon: <Home className="w-5 h-5" /> },
    { to: "/Academia-orlando-de-leon/gallery", label: "Galería", icon: <Image className="w-5 h-5" /> },
    { to: "/Academia-orlando-de-leon/story", label: "Historia", icon: <BookOpen className="w-5 h-5" /> },
    { to: "/Academia-orlando-de-leon/donate", label: "Donaciones", icon: <HeartHandshake className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY.current + 5) {
          setIsVisible(false);
          setIsOpen(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsVisible(true);
        }
      }
      
      if (Math.abs(currentScrollY - lastScrollY.current) > 5 || currentScrollY <= 10) {
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      ${scrolled ? 'bg-[#071f43]/95 backdrop-blur-md shadow-xl' : 'bg-[#071f43] backdrop-blur-sm'}
      border-b ${scrolled ? 'border-blue-400/20' : 'border-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> {/* Aumentado a h-24 */}
          {/* Logo y Nombre - Versión más grande */}
          <NavLink
            to="/Academia-orlando-de-leon"
            className="flex items-center gap-4 group" /* Aumentado gap a 4 */
            onClick={closeMobileMenu}
          >
            <img 
              src={logo} 
              alt="Logo Academia Orlando de León" 
              className={`h-16 w-16 transition-all duration-300 rounded-full object-cover border-2 ${
                scrolled ? 'border-blue-400/50' : 'border-white/50'
              }`} /* Aumentado a h-16 w-16 */
            />
            <span className="text-white font-bold text-xl tracking-tight group-hover:text-blue-300 transition-colors duration-300">
              <span className="block leading-tight text-2xl">Academia</span> {/* Aumentado a text-2xl */}
              <span className="block text-blue-300 text-lg">Orlando de León</span> {/* Aumentado a text-lg */}
            </span>
          </NavLink>

          {/* Navegación Desktop */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <NavLinkItem key={link.to} to={link.to} icon={link.icon}>
                {link.label}
              </NavLinkItem>
            ))}
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                isOpen ? 'bg-blue-600/30 text-white' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`} /* Aumentado padding a p-3 */
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              type="button"
            >
              {isOpen ? (
                <X className="h-7 w-7" strokeWidth={2.5} /> /* Aumentado a h-7 w-7 */
              ) : (
                <Menu className="h-7 w-7" strokeWidth={2.5} /> /* Aumentado a h-7 w-7 */
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          bg-gradient-to-b from-[#0a2a58] to-[#071f43] shadow-xl
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col px-4 pb-8 pt-4 space-y-2">
          {navLinks.map((link) => {
            const resolvedPath = useResolvedPath(link.to);
            const isActive = useMatch({ path: resolvedPath.pathname, end: true });
            
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-600/30 text-white font-medium' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className={`p-2 rounded-lg ${
                  isActive ? 'bg-blue-400/20' : 'bg-white/5'
                }`}>
                  {link.icon}
                </span>
                <span className="text-lg">{link.label}</span> {/* Aumentado a text-lg */}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;