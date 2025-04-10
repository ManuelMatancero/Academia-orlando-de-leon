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
          <Route path="/Academia-orlando-de-leon" element={<Home />} />
          <Route path="/Academia-orlando-de-leon/gallery" element={<Gallery />} />
          <Route path="/Academia-orlando-de-leon/story" element={<Story />} />
          <Route path="/Academia-orlando-de-leon/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;