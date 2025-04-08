import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Story from './components/Story';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/story" element={<Story />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;