// import React from 'react';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/Footer/footer';
// import HeroSection from './components/herosection/HeroSection';
// import Aboutus from './pages/Aboutus';
// import Services from './pages/Services';
// import Projects from './pages/Projects';
// import Contactus from './pages/Contactus';
// import IDSnewlogo from "/src/IDSnewlogo.png" // Ensure this is the correct path to your image
// import { Contact } from "lucide-react";
// import Trunkey from'./pages/ServicesPages/Trunkey'

// const imageUrls = [
//   'https://via.placeholder.com/150',
//   'https://via.placeholder.com/150',
//   'https://via.placeholder.com/150',
//   'https://via.placeholder.com/150',
// ];


// function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Sections */}
//       <div id="home" className="h-screen bg-gray-100 flex items-center justify-center">
//         <HeroSection />
//       </div>
//       <div id="aboutus" className="h-screen bg-orange-100 flex items-center justify-center">
//         <Aboutus images={imageUrls} />
//       </div>
//       <div id="services" className=" bg-orange-100 ">
//         <Services />
//       </div>
//       <br></br>
//       <div id="projects" className="h-screen bg-gray-400">
//         <Projects
//           image={IDSnewlogo}
//           projects={105}
//           clients={47}
//           experience={25}
//         />
//       </div>
//       <div id="contact" className="">
//       <Contactus />
//       </div>
      // <div id="trunkey" className="">
      // <Trunkey />
      // </div>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;











import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/footer';
import HeroSection from './components/herosection/HeroSection';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contactus from './pages/Contactus';
import IDSnewlogo from '/src/IDSnewlogo.png'; // Ensure this is the correct path to your image
import Trunkey from './pages/ServicesPages/Trunkey';
import Interior from './pages/ServicesPages/Interior';
import Civil from './pages/ServicesPages/Civil';
import Exterior from './pages/ServicesPages/Exterior';
import Painting from './pages/ServicesPages/Painting';
import Electrical from './pages/ServicesPages/Electrical';
import Retail from './pages/ProjectPages/Retail'
import Residential from './pages/ProjectPages/Residential'
import Commercial from './pages/ProjectPages/Commercial'





const imageUrls = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Define routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Sections */}
              <div id="home" className="h-screen bg-gray-100 flex items-center justify-center">
                <HeroSection />
              </div>
              <div id="aboutus" className="h-screen bg-orange-100 flex items-center justify-center">
                <Aboutus images={imageUrls} />
              </div>
              <div id="services" className="bg-orange-100">
                <Services />
              </div>
              <br />
              <div id="projects" className="h-screen bg-gray-400">
                <Projects
                  image={IDSnewlogo}
                  projects={98}
                  clients={37}
                  experience={20}
                />
              </div>
              <div id="contact" className="">
                <Contactus />
              </div>
              {/* <div id="trunkey" className="">
                <Trunkey />
              </div> */}
            </div>
          }
        />
        <Route path="/ServicesPages/trunkey" element={<Trunkey />} />
        <Route path="/ServicesPages/interior" element={<Interior/>} />
        <Route path="/ServicesPages/civil" element={<Civil />} />
        <Route path="/ServicesPages/exterior" element={<Exterior />} />
        <Route path="/ServicesPages/painting" element={<Painting />} />
        <Route path="/ServicesPages/electrical" element={<Electrical/>} />

        <Route path="/ProjectPages/retail" element={<Retail/>} />
        <Route path="/ProjectPages/residential" element={<Residential/>} />
        <Route path="/ProjectPages/commercial" element={<Commercial/>} />

      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;