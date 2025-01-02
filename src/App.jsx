import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import HeroSection from './components/herosection/HeroSection';

// const Home = () => <div>Home Page</div>;
// const Aboutus = () => <div>About Us Page</div>;
// const Services = () => <div>Services Page</div>;
// const Projects = () => <div>Projects Page</div>;
// const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


