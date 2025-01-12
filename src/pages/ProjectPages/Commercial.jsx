// import React from "react";
// // import HeroSection from '/src/components/herosection/HeroSection.jsx';
// import CommercialSlider from '/src/components/picsliders/TrunkeySlider';

// const Services = () => {
//   return (
//     <div style={styles.container}>
//       {/* Hero Section */}
//       <div style={styles.heroWrapper}>
//         <CommercialSlider />
//       </div>

//       {/* Header Section */}
//       <div style={styles.header}>
//         <h1 style={styles.title}>Trunkey Contracts</h1>
//         <p style={styles.description}>
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//           Excepteur sint occaecat cupidatat non proident. Image by Freepik.
//         </p>
//       </div>

//       {/* Services Section */}
//       <div style={styles.services}>
//         {/* Service 1 */}
//         <div style={styles.serviceRow}>
//           <img
//             src="https://via.placeholder.com/500x300"
//             alt="Skyscrapers Buildings"
//             style={styles.image}
//           />
//           <div style={styles.textContainer}>
//             <h3 style={styles.cardTitle}>Skyscrapers Buildings</h3>
//             <p style={styles.cardDescription}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
//             </p>
//             <a href="#" style={styles.learnMore}>
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Service 2 */}
//         <div style={styles.serviceRow}>
//           <div style={styles.textContainer}>
//             <h3 style={styles.cardTitle}>Conceptual Architecture</h3>
//             <p style={styles.cardDescription}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
//             </p>
//             <a href="#" style={styles.learnMore}>
//               Learn More
//             </a>
//           </div>
//           <img
//             src="https://via.placeholder.com/500x300"
//             alt="Conceptual Architecture"
//             style={styles.image}
//           />
//         </div>

//         {/* Service 3 */}
//         <div style={styles.serviceRow}>
//           <img
//             src="https://via.placeholder.com/500x300"
//             alt="Innovative Designs"
//             style={styles.image}
//           />
//           <div style={styles.textContainer}>
//             <h3 style={styles.cardTitle}>Innovative Designs</h3>
//             <p style={styles.cardDescription}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
//             </p>
//             <a href="#" style={styles.learnMore}>
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div style={styles.footer}>
//         <button
//           style={styles.contactButton}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
//         >
//           Contact Us
//         </button>
//       </div>
//       <br />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: "#ffffff",
//     color: "orange",
//     fontFamily: "Arial, sans-serif",
//     paddingTop: "4rem", // Adds space for the navbar height
//   },
//   heroWrapper: {
//     width: "100%", // Full width of the viewport
//     height: "100vh", // Full height of the viewport
//     overflow: "hidden", // Prevent scrollbars
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     boxSizing: "border-box", // Ensures padding and borders are included in width/height
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "2rem",
//     padding: "2rem",
//   },
//   title: {
//     fontSize: "2.5rem",
//     margin: "0 0 1rem",
//   },
//   description: {
//     fontSize: "1rem",
//     color: "black",
//   },
//   services: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "2rem",
//   },
//   serviceRow: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     alignItems: "center",
//     gap: "2rem",
//   },
//   textContainer: {
//     textAlign: "left",
//     paddingLeft: "2rem", // Adds space between the browser window and the text
//     paddingRight: "2rem", // Optional for symmetric spacing
//   },
//   cardTitle: {
//     fontSize: "1.8rem",
//     margin: "0 0 1rem",
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "black",
//     marginBottom: "1rem",
//   },
//   learnMore: {
//     textDecoration: "none",
//     color: "orange",
//     fontWeight: "bold",
//   },
//   image: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "8px",
//   },
//   footer: {
//     textAlign: "center",
//     marginTop: "2rem",
//   },
//   contactButton: {
//     backgroundColor: "#f97316", // Default button color
//     border: "none",
//     borderRadius: "20px",
//     padding: "0.75rem 1.5rem",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     color: "white",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease", // Smooth hover transition
//   },
// };

// export default Services;









import React, { useState } from 'react';
import CommercialSlider from '/src/components/picsliders/CommercialSlider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import commercialone from "/public/commercialone.jpg";
import commercialtwo from "/public/commercialtwo.jpg";
import commercialthree from "/public/commercialthree.jpg";

const Commercial = () => {
  const services = [
    {
      id: 1,
      title: "Functional Design for Productivity",
      description: "At Interior Designer Studio, We create commercial spaces that enhance workflow and productivity while reflecting brand identity.",
      image: "/public/commercialone.jpg",
      details: [
        "Our designs prioritize functionality, ensuring that every element contributes to the efficient operation of the business."
      ]
    },
    {
      id: 2,
      title: "Brand Integration",
      description: "We ensure that the design of commercial spaces reflects the brand's personality and values.",
      image: "/public/commercialtwo.jpg",
      details: [
        "From color schemes to layouts, we incorporate brand elements to create a cohesive and memorable experience for clients and employees."
      ]
    },
    {
      id: 3,
      title: "Scalability and Flexibility",
      description: "We design with growth in mind, ensuring spaces can adapt to evolving business needs.",
      image: "/public/commercialthree.jpg",
      details: [
        "Our commercial projects include modular layouts and flexible designs that accommodate future expansions or changes."
      ]
    }
  ];

  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="w-full bg-white text-orange-500 font-sans pt-16">
      <div className="w-full h-screen flex justify-center items-center overflow-hidden">
        <CommercialSlider />
      </div>

      <div className="text-center mb-8 p-8">
        <h1 className="text-4xl md:text-5xl mb-4">Commercial Projects</h1>
        <p className="text-base text-black max-w-2xl mx-auto">
        Personalized Designs that Reflect your Lifestyle and Personality.        </p>
      </div>

      <div className="space-y-8 px-4 md:px-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 ? 'md:flex-row-reverse' : ''}`}>
              <div className="group relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>
                <p className="text-black mb-4">{service.description}</p>
                <button 
                  onClick={() => toggleDropdown(service.id)}
                  className="flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors"
                >
                  Learn More
                  {openDropdown === service.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {/* Dropdown Content */}
                <div 
                  className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-black">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
};

export default Commercial;