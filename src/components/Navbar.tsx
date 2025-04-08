import React from 'react';
import { Link } from 'react-router-dom';
import { Baseline as Baseball } from 'lucide-react';
import { useState } from "react";
import { Menu, X} from "lucide-react";
import logo from '../assets/images/joellogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#071f43] backdrop-blur-md shadow-md ring-1 ring-white/10 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
            <span className="text-white font-semibold text-xl tracking-wide">Academia Orlando de León</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-white font-medium">
            <Link to="/" className="hover:text-blue-200 transition">Inicio</Link>
            <Link to="/gallery" className="hover:text-blue-200 transition">Galeria</Link>
            <Link to="/story" className="hover:text-blue-200 transition">Historia</Link>
            <Link to="/donate" className="hover:text-blue-200 transition">Donar</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pb-4 text-white space-y-2 font-medium bg-blue-500/80 backdrop-blur-md">
          <Link to="/" className="hover:text-blue-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/gallery" className="hover:text-blue-200 transition" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/story" className="hover:text-blue-200 transition" onClick={() => setIsOpen(false)}>Our Story</Link>
          <Link to="/donate" className="hover:text-blue-200 transition" onClick={() => setIsOpen(false)}>Donate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;