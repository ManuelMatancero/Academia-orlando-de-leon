import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes existentes
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Story from './components/Story';
import Donate from './components/Donate';
import Footer from './components/Footer';

// 1. Importa el nuevo componente de la videoteca
import VideoGallery from './components/VideoGallery';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main> {/* Es una buena práctica envolver las rutas en un <main> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* 2. Añade la nueva ruta para la videoteca aquí */}
            <Route path="/videoteca" element={<VideoGallery />} />

            <Route path="/story" element={<Story />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;