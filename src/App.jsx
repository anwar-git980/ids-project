import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HeroSection from './components/herosection/HeroSection';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contactus from './pages/Contactus';
import IDSnewlogo from '/src/IDSnewlogo.png';
import projectpic from '/src/projectpic.jpg';
import Trunkey from './pages/ServicesPages/Trunkey';
import Interior from './pages/ServicesPages/Interior';
import Civil from './pages/ServicesPages/Civil';
import Exterior from './pages/ServicesPages/Exterior';
import Painting from './pages/ServicesPages/Painting';
import Electrical from './pages/ServicesPages/Electrical';
import Retail from './pages/ProjectPages/Retail';
import Residential from './pages/ProjectPages/Residential';
import Commercial from './pages/ProjectPages/Commercial';

const imageUrls = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const HomePage = () => (
  <div className="flex flex-col">
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <HeroSection />
    </section>

    <section id="aboutus" className="min-h-screen py-1 md:py-2 bg-orange-100">
      <div className="container mx-auto px-4">
        <Aboutus images={imageUrls} />
      </div>
    </section>

    <section id="services" className="py-1 md:py-2 bg-gray-50">
      <div className="container mx-auto px-4">
        <Services />
      </div>
    </section>

    <section id="projects" className="min-h-screen py-1 md:py-2 bg-amber-50">
      <div className="container mx-auto px-4">
        <Projects
          image={projectpic}
          projects={98}
          clients={37}
          experience={20}
        />
      </div>
    </section>

    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Contactus />
      </div>
    </section>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ServicesPages/trunkey" element={<Trunkey />} />
            <Route path="/ServicesPages/interior" element={<Interior />} />
            <Route path="/ServicesPages/civil" element={<Civil />} />
            <Route path="/ServicesPages/exterior" element={<Exterior />} />
            <Route path="/ServicesPages/painting" element={<Painting />} />
            <Route path="/ServicesPages/electrical" element={<Electrical />} />
            <Route path="/ProjectPages/retail" element={<Retail />} />
            <Route path="/ProjectPages/residential" element={<Residential />} />
            <Route path="/ProjectPages/commercial" element={<Commercial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;