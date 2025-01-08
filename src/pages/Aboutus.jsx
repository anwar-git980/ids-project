// import React, { useState } from 'react';

// function Aboutus({ images }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Open modal with the selected image
//   const handleViewClick = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <section id="aboutus" className="min-h-screen bg-orange-100 flex flex-col items-center py-10">
//       {/* Bold and appealing "About Us" title at the top */}
//       <h1 className="text-5xl font-extrabold text-orange-800 mb-12 text-center uppercase tracking-widest">
//         About Us
//       </h1>

//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
//         {/* Left Text Section */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h2 className="text-3xl font-bold mb-6 text-orange-700">
//             Who We Are
//           </h2>
//           <p className="text-orange-600 mb-4 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
//             tortor in elit feugiat tincidunt. We are committed to delivering
//             excellence and fostering innovation in everything we do.
//           </p>
//           <p className="text-orange-600 leading-relaxed">
//             Nulla facilisi. Curabitur vel lorem nec ligula consectetur
//             vestibulum. Donec sed eros non lorem eleifend interdum. Join us on
//             our journey to make a difference!
//           </p>
//         </div>

//         {/* Right Dynamic Grid Section */}
//         <div className="md:w-1/2 grid grid-cols-2 gap-6">
//           {/* Display dynamic images */}
//           {images && images.length > 0 ? (
//             images.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-black h-40 w-full flex items-center justify-center overflow-hidden rounded-lg"
//               >
//                 <img
//                   src={image}
//                   alt={Dynamic ${index + 1}}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center cursor-pointer"
//                   onClick={() => handleViewClick(image)}
//                 >
//                   <span className="text-white font-bold text-lg">View</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600 col-span-2">
//               No images available. Please provide image URLs.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Modal for enlarged image */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={handleCloseModal}
//         >
//           <div className="relative">
//             {/* Display selected image in full-screen */}
//             <img
//               src={selectedImage}
//               alt="Enlarged"
//               className="w-screen h-screen object-contain"
//             />
//             {/* Close button */}
//             <button
//               className="absolute top-4 right-4 text-white bg-red-600 px-4 py-2 rounded-full text-lg"
//               onClick={handleCloseModal}
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Aboutus;


// import React from "react";

// const AboutUs = () => {
//   const styles = {
//     aboutUs: {
//       padding: "20px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     aboutContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       maxWidth: "1200px",
//       gap: "20px",
//     },
//     imageSection: {
//       flex: 1,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     sketch: {
//       maxWidth: "100%",
//       height: "auto",
//       borderRadius: "10px",
//     },
//     contentSection: {
//       flex: 1,
//       textAlign: "left",
//     },
//     heading: {
//       fontSize: "2rem",
//       marginBottom: "10px",
//     },
//     paragraph: {
//       marginBottom: "20px",
//       fontSize: "1rem",
//       lineHeight: "1.6",
//     },
//     values: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "10px",
//       marginBottom: "20px",
//     },
//     value: {
//       display: "flex",
//       alignItems: "center",
//       gap: "10px",
//       flex: "1 1 calc(50% - 10px)",
//     },
//     valueIcon: {
//       width: "50px",
//       height: "50px",
//     },
//     exploreButton: {
//       backgroundColor: "#ff6b6b",
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "1rem",
//     },
//     exploreButtonHover: {
//       backgroundColor: "#f97316",
//     },
//     "@media (maxWidth: 768px)": {
//       aboutContainer: {
//         flexDirection: "column",
//       },
//       value: {
//         flex: "1 1 100%",
//       },
//       heading: {
//         fontSize: "1.5rem",
//       },
//     },
//   };

//   return (
//     <section style={styles.aboutUs}>
//       <div style={styles.aboutContainer}>
//         <div style={styles.imageSection}>
//           <img
//             src="https://via.placeholder.com/400x400?text=Sketch+Placeholder"
//             alt="Architectural Sketch"
//             style={styles.sketch}
//           />
//         </div>
//         <div style={styles.contentSection}>
//           <h2 style={styles.heading}>About Us</h2>
//           <p style={styles.paragraph}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
//             lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit
//             amet, consectetur adipiscing elit.
//           </p>
//           <div style={styles.values}>
//             <div style={styles.value}>
//               <img
//                 src="https://via.placeholder.com/50"
//                 alt="Value Icon"
//                 style={styles.valueIcon}
//               />
//               <p>Value 1</p>
//             </div>
//             <div style={styles.value}>
//               <img
//                 src="https://via.placeholder.com/50"
//                 alt="Value Icon"
//                 style={styles.valueIcon}
//               />
//               <p>Value 2</p>
//             </div>
//             <div style={styles.value}>
//               <img
//                 src="https://via.placeholder.com/50"
//                 alt="Value Icon"
//                 style={styles.valueIcon}
//               />
//               <p>Value 3</p>
//             </div>
//             <div style={styles.value}>
//               <img
//                 src="https://via.placeholder.com/50"
//                 alt="Value Icon"
//                 style={styles.valueIcon}
//               />
//               <p>Value 4</p>
//             </div>
//           </div>
//           <button
//             style={styles.exploreButton}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
//           >
//             Explore our Services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;










// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// const AboutUs = () => {
//   const styles = {
//     aboutUs: {
//       padding: "20px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     aboutContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       maxWidth: "1200px",
//       gap: "20px",
//     },
//     imageSection: {
//       flex: 1,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     sketch: {
//       maxWidth: "100%",
//       height: "auto",
//       borderRadius: "10px",
//     },
//     contentSection: {
//       flex: 1,
//       textAlign: "left",
//     },
//     heading: {
//       fontSize: "2rem",
//       marginBottom: "10px",
//     },
//     paragraph: {
//       marginBottom: "20px",
//       fontSize: "1rem",
//       lineHeight: "1.6",
//     },
//     values: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "10px",
//       marginBottom: "20px",
//     },
//     value: {
//       display: "flex",
//       alignItems: "center",
//       gap: "10px",
//       flex: "1 1 calc(50% - 10px)",
//       cursor: "pointer",
//       transition: "transform 0.2s ease",
//     },
//     valueIcon: {
//       width: "70px", // Increased from 50px
//       height: "70px", // Increased from 50px
//       borderRadius: "8px",
//       transition: "transform 0.2s ease",
//     },
//     valueIconHover: {
//       transform: "scale(1.05)",
//     },
//     exploreButton: {
//       backgroundColor: "#ff6b6b",
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "1rem",
//     },
//     modalImage: {
//       width: "100%",
//       maxWidth: "400px",
//       height: "auto",
//       borderRadius: "8px",
//     },
//     "@media (maxWidth: 768px)": {
//       aboutContainer: {
//         flexDirection: "column",
//       },
//       value: {
//         flex: "1 1 100%",
//       },
//       heading: {
//         fontSize: "1.5rem",
//       },
//     },
//   };

//   const values = [
//     { id: 1, title: "Value 1", image: "/api/placeholder/200/200" },
//     { id: 2, title: "Value 2", image: "/api/placeholder/200/200" },
//     { id: 3, title: "Value 3", image: "/api/placeholder/200/200" },
//     { id: 4, title: "Value 4", image: "/api/placeholder/200/200" },
//   ];

//   return (
//     <section style={styles.aboutUs}>
//       <div style={styles.aboutContainer}>
//         <div style={styles.imageSection}>
//           <img
//             src="/api/placeholder/400/400"
//             alt="Architectural Sketch"
//             style={styles.sketch}
//           />
//         </div>
//         <div style={styles.contentSection}>
//           <h2 style={styles.heading}>About Us</h2>
//           <p style={styles.paragraph}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
//             lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit
//             amet, consectetur adipiscing elit.
//           </p>
//           <div style={styles.values}>
//             {values.map((value) => (
//               <Dialog key={value.id}>
//                 <DialogTrigger asChild>
//                   <div 
//                     style={styles.value}
//                     onMouseOver={(e) => {
//                       e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
//                     }}
//                     onMouseOut={(e) => {
//                       e.currentTarget.querySelector('img').style.transform = 'scale(1)';
//                     }}
//                   >
//                     <img
//                       src={value.image}
//                       alt={${value.title} Icon}
//                       style={styles.valueIcon}
//                     />
//                     <p>{value.title}</p>
//                   </div>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <img
//                     src={value.image}
//                     alt={${value.title} Large}
//                     style={styles.modalImage}
//                   />
//                   <h3 className="text-lg font-semibold mt-4">{value.title}</h3>
//                   <p className="mt-2">
//                     Detailed description of {value.title} goes here. Click outside to close.
//                   </p>
//                 </DialogContent>
//               </Dialog>
//             ))}
//           </div>
//           <button
//             style={styles.exploreButton}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
//           >
//             Explore our Services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;




//======>LATEST<=======

// import React, { useState, useEffect } from "react";

// const Modal = ({ isOpen, onClose, children }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         zIndex: 1000,
//       }}
//       onClick={onClose}
//     >
//       <div
//         style={{
//           backgroundColor: 'white',
//           padding: '2rem',
//           borderRadius: '8px',
//           width: '90%',
//           maxWidth: '500px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//         onClick={e => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// const AboutUs = () => {
//   const [selectedValue, setSelectedValue] = useState(null);

//   const styles = {
//     aboutUs: {
//       padding: "20px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     aboutContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       maxWidth: "1200px",
//       gap: "20px",
//     },
//     imageSection: {
//       flex: 1,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     sketch: {
//       maxWidth: "100%",
//       height: "auto",
//       borderRadius: "10px",
//     },
//     contentSection: {
//       flex: 1,
//       textAlign: "left",
//     },
//     heading: {
//       fontSize: "2rem",
//       marginBottom: "10px",
//     },
//     paragraph: {
//       marginBottom: "20px",
//       fontSize: "1rem",
//       lineHeight: "1.6",
//     },
//     values: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "10px",
//       marginBottom: "20px",
//     },
//     value: {
//       display: "flex",
//       alignItems: "center",
//       gap: "10px",
//       flex: "1 1 calc(50% - 10px)",
//       cursor: "pointer",
//       transition: "transform 0.2s ease",
//     },
//     valueIcon: {
//       width: "70px",
//       height: "70px",
//       borderRadius: "8px",
//       transition: "transform 0.2s ease",
//     },
//     modalImage: {
//       width: '100%',
//       maxWidth: '300px',
//       height: 'auto',
//       borderRadius: '8px',
//       marginBottom: '1rem',
//       objectFit: 'contain',
//     },
//     modalTitle: {
//       fontSize: "1.5rem",
//       fontWeight: "600",
//       marginBottom: "0.5rem",
//     },
//     modalDescription: {
//       fontSize: "1rem",
//       lineHeight: "1.6",
//       color: "#666",
//       textAlign: "center",
//     },
//     exploreButton: {
//       backgroundColor: "#f97316",  // Orange color from the start
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "1rem",
//       transition: "background-color 0.2s ease",
//     },
//     "@media (maxWidth: 768px)": {
//       aboutContainer: {
//         flexDirection: "column",
//       },
//       value: {
//         flex: "1 1 100%",
//       },
//       heading: {
//         fontSize: "1.5rem",
//       },
//     },
//   };

//   const values = [
//     { id: 1, title: "Value 1", image: "https://via.placeholder.com/200x200" },
//     { id: 2, title: "Value 2", image: "https://via.placeholder.com/200x200" },
//     { id: 3, title: "Value 3", image: "https://via.placeholder.com/200x200" },
//     { id: 4, title: "Value 4", image: "https://via.placeholder.com/200x200" },
//   ];

//   return (
//     <section style={styles.aboutUs}>
//       <div style={styles.aboutContainer}>
//         <div style={styles.imageSection}>
//           <img
//             src="https://via.placeholder.com/400x500"
//             alt="Architectural Sketch"
//             style={styles.sketch}
//           />
//         </div>
//         <div style={styles.contentSection}>
//           <h2 style={styles.heading}>About Us</h2>
//           <p style={styles.paragraph}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
//             lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit
//             amet, consectetur adipiscing elit.
//           </p>
//           <div style={styles.values}>
//             {values.map((value) => (
//               <div
//                 key={value.id}
//                 style={styles.value}
//                 onClick={() => setSelectedValue(value)}
//                 onMouseOver={(e) => {
//                   e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.querySelector('img').style.transform = 'scale(1)';
//                 }}
//               >
//                 <img
//                   src={value.image}
//                   alt={`${value.title} Icon`}
//                   style={styles.valueIcon}
//                 />
//                 <p>{value.title}</p>
//               </div>
//             ))}
//           </div>
//           <button
//             style={styles.exploreButton}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
//           >
//             Explore our Services
//           </button>
//         </div>
//       </div>
//       <Modal 
//         isOpen={!!selectedValue} 
//         onClose={() => setSelectedValue(null)}
//       >
//         {selectedValue && (
//           <>
//             <img
//               src={selectedValue.image}
//               alt={`${selectedValue.title} Large`}
//               style={styles.modalImage}
//             />
//             <h3 style={styles.modalTitle}>{selectedValue.title}</h3>
//             <p style={styles.modalDescription}>
//               Detailed description of {selectedValue.title} goes here. Click outside to close.
//             </p>
//           </>
//         )}
//       </Modal>
//     </section>
//   );
// };

// export default AboutUs;





//===>NEW<====
// import React from "react";

// const AboutUs = () => {
//   // Replace the image URL with your own dynamic image source or API link
//   const imageUrl =
//     "https://via.placeholder.com/400x400?text=Dynamic+Image"; // Example dynamic image

//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between px-12 py-12 bg-gray-100">
//       {/* Left Section: Dynamic Image */}
//       <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
//         <div className="w-80 h-80 bg-gray-200 flex items-center justify-center border border-gray-300 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
//           <img
//             src={imageUrl}
//             alt="Dynamic Content"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Right Section: Text */}
//       <div className="w-full lg:w-1/2">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
//           About Us
//         </h2>
//         <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
//           nonummy nibh.
//         </p>
//         <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur.
//         </p>
//         <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//           ad minim veniam.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;



///====>>>latest<<====
import React, { useState } from 'react';
import aboutus from '/src/aboutuspic.jpeg'

const ServicesShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const productImages = [
    {
      id: 1,
      url: "/src/aboutuspic.jpeg",
      alt: "Service view 1"
    },
    {
      id: 2,
      url: "/src/newaboutuspic.jpeg",
      alt: "Service view 2"
    },
    {
      id: 3,
      url: "/src/aboutusfinalpic.jpeg",
      alt: "Service view 3"
    }
  ];

  const features = [
    {
      title: "ENERGIZED DESIGN",
      description: "Modern and energetic design solutions for your space",
      icon: "/api/placeholder/80/80"
    },
    {
      title: "QUALITY BUILD",
      description: "Premium materials and expert craftsmanship",
      icon: "/api/placeholder/80/80"
    },
    {
      title: "PERFECT FINISH",
      description: "Attention to detail in every project completion",
      icon: "/api/placeholder/80/80"
    }
  ];

  return (
    <section className="w-full relative bg-orange-100">
      {/* Services Title */}
      <div className="text-center pt-8 sm:pt-12">
        <h1 className="text-3xl sm:text-4xl lg:text-2xl font-bold text-orange-600 mb-4">
          About us
        </h1>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="relative w-full">
              <div className="bg-white rounded-lg p-2 sm:p-4 lg:p-6 shadow-sm">
                <div 
                  className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src={productImages[currentImage].url}
                    alt={productImages[currentImage].alt}
                    className={`rounded-lg object-cover w-full h-full transition-transform duration-500 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Image Navigation */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 
                                  ${currentImage === index ? 'bg-white w-4' : 'bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              <div className="text-center lg:text-left px-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 text-gray-800">
                  Complete Design Solutions
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We provide comprehensive design and build services tailored to your needs,
                  ensuring excellence in every project we undertake.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md
                             transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 sm:w-16 aspect-square bg-orange-50 rounded-full 
                                    flex items-center justify-center mb-2 sm:mb-3
                                    group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-6 sm:w-8 aspect-square object-contain"
                        />
                      </div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {/* <div className="text-center lg:text-left pt-2">
                <button 
                  className="inline-flex items-center justify-center 
                           px-5 sm:px-6 py-2 sm:py-3
                           text-sm sm:text-base
                           bg-teal-500 text-white rounded-full
                           hover:bg-teal-600 hover:shadow-lg
                           transform hover:-translate-y-0.5
                           transition-all duration-300"
                >
                  Explore Our Services
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
