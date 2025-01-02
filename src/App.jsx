import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/footer';
import HeroSection from './components/herosection/HeroSection';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const imageUrls = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];


function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <HeroSection />
      </div>
      <div id="aboutus" className="h-screen bg-orange-100 flex items-center justify-center">
        <Aboutus images={imageUrls} />
      </div>
      <div id="services" className=" bg-orange-100 ">
        <Services />
      </div>
      <br></br>
      <div id="projects" className="">
      <Projects />
      </div>
      <div id="contact" className="">
      <Contact/>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;