import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Aboutus from './pages/aboutus';
import Projects from './pages/projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HeroSection from './components/herosection/HeroSection';

// const Home = () => <div>Home Page</div>;
// const Aboutus = () => <div>About Us Page</div>;
// const Services = () => <div>Services Page</div>;
// const Projects = () => <div>Projects Page</div>;
// const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
