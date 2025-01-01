import React from 'react';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import HeroSection from './components/herosection/HeroSection';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <HeroSection />
      </div>
      <div id="aboutus" className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl font-bold">About Us</h2>
      </div>
      <div id="services" className="h-screen bg-gray-300 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Services</h2>
      </div>
      <div id="projects" className="h-screen bg-gray-400 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div id="contact" className="h-screen bg-gray-500 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
