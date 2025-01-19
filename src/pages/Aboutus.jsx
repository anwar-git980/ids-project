// // import React, { useState } from 'react';

// // function Aboutus({ images }) {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   // Open modal with the selected image
// //   const handleViewClick = (image) => {
// //     setSelectedImage(image);
// //     setIsModalOpen(true);
// //   };

// //   // Close modal
// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedImage(null);
// //   };

// //   return (
// //     <section id="aboutus" className="min-h-screen bg-orange-100 flex flex-col items-center py-10">
// //       {/* Bold and appealing "About Us" title at the top */}
// //       <h1 className="text-5xl font-extrabold text-orange-800 mb-12 text-center uppercase tracking-widest">
// //         About Us
// //       </h1>

// //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
// //         {/* Left Text Section */}
// //         <div className="md:w-1/2 mb-8 md:mb-0">
// //           <h2 className="text-3xl font-bold mb-6 text-orange-700">
// //             Who We Are
// //           </h2>
// //           <p className="text-orange-600 mb-4 leading-relaxed">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
// //             tortor in elit feugiat tincidunt. We are committed to delivering
// //             excellence and fostering innovation in everything we do.
// //           </p>
// //           <p className="text-orange-600 leading-relaxed">
// //             Nulla facilisi. Curabitur vel lorem nec ligula consectetur
// //             vestibulum. Donec sed eros non lorem eleifend interdum. Join us on
// //             our journey to make a difference!
// //           </p>
// //         </div>

// //         {/* Right Dynamic Grid Section */}
// //         <div className="md:w-1/2 grid grid-cols-2 gap-6">
// //           {/* Display dynamic images */}
// //           {images && images.length > 0 ? (
// //             images.map((image, index) => (
// //               <div
// //                 key={index}
// //                 className="relative group bg-black h-40 w-full flex items-center justify-center overflow-hidden rounded-lg"
// //               >
// //                 <img
// //                   src={image}
// //                   alt={`Dynamic ${index + 1}`}
// //                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
// //                 />
// //                 <div
// //                   className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center cursor-pointer"
// //                   onClick={() => handleViewClick(image)}
// //                 >
// //                   <span className="text-white font-bold text-lg">View</span>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-gray-600 col-span-2">
// //               No images available. Please provide image URLs.
// //             </p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Modal for enlarged image */}
// //       {isModalOpen && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
// //           onClick={handleCloseModal}
// //         >
// //           <div className="relative">
// //             {/* Display selected image in full-screen */}
// //             <img
// //               src={selectedImage}
// //               alt="Enlarged"
// //               className="w-screen h-screen object-contain"
// //             />
// //             {/* Close button */}
// //             <button
// //               className="absolute top-4 right-4 text-white bg-red-600 px-4 py-2 rounded-full text-lg"
// //               onClick={handleCloseModal}
// //             >
// //               X
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // }

// // export default Aboutus;


// // import React from "react";

// // const AboutUs = () => {
// //   const styles = {
// //     aboutUs: {
// //       padding: "20px",
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //     },
// //     aboutContainer: {
// //       display: "flex",
// //       flexWrap: "wrap",
// //       maxWidth: "1200px",
// //       gap: "20px",
// //     },
// //     imageSection: {
// //       flex: 1,
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //     },
// //     sketch: {
// //       maxWidth: "100%",
// //       height: "auto",
// //       borderRadius: "10px",
// //     },
// //     contentSection: {
// //       flex: 1,
// //       textAlign: "left",
// //     },
// //     heading: {
// //       fontSize: "2rem",
// //       marginBottom: "10px",
// //     },
// //     paragraph: {
// //       marginBottom: "20px",
// //       fontSize: "1rem",
// //       lineHeight: "1.6",
// //     },
// //     values: {
// //       display: "flex",
// //       flexWrap: "wrap",
// //       gap: "10px",
// //       marginBottom: "20px",
// //     },
// //     value: {
// //       display: "flex",
// //       alignItems: "center",
// //       gap: "10px",
// //       flex: "1 1 calc(50% - 10px)",
// //     },
// //     valueIcon: {
// //       width: "50px",
// //       height: "50px",
// //     },
// //     exploreButton: {
// //       backgroundColor: "#ff6b6b",
// //       color: "white",
// //       padding: "10px 20px",
// //       border: "none",
// //       borderRadius: "5px",
// //       cursor: "pointer",
// //       fontSize: "1rem",
// //     },
// //     exploreButtonHover: {
// //       backgroundColor: "#f97316",
// //     },
// //     "@media (maxWidth: 768px)": {
// //       aboutContainer: {
// //         flexDirection: "column",
// //       },
// //       value: {
// //         flex: "1 1 100%",
// //       },
// //       heading: {
// //         fontSize: "1.5rem",
// //       },
// //     },
// //   };

// //   return (
// //     <section style={styles.aboutUs}>
// //       <div style={styles.aboutContainer}>
// //         <div style={styles.imageSection}>
// //           <img
// //             src="https://via.placeholder.com/400x400?text=Sketch+Placeholder"
// //             alt="Architectural Sketch"
// //             style={styles.sketch}
// //           />
// //         </div>
// //         <div style={styles.contentSection}>
// //           <h2 style={styles.heading}>About Us</h2>
// //           <p style={styles.paragraph}>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
// //             lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit
// //             amet, consectetur adipiscing elit.
// //           </p>
// //           <div style={styles.values}>
// //             <div style={styles.value}>
// //               <img
// //                 src="https://via.placeholder.com/50"
// //                 alt="Value Icon"
// //                 style={styles.valueIcon}
// //               />
// //               <p>Value 1</p>
// //             </div>
// //             <div style={styles.value}>
// //               <img
// //                 src="https://via.placeholder.com/50"
// //                 alt="Value Icon"
// //                 style={styles.valueIcon}
// //               />
// //               <p>Value 2</p>
// //             </div>
// //             <div style={styles.value}>
// //               <img
// //                 src="https://via.placeholder.com/50"
// //                 alt="Value Icon"
// //                 style={styles.valueIcon}
// //               />
// //               <p>Value 3</p>
// //             </div>
// //             <div style={styles.value}>
// //               <img
// //                 src="https://via.placeholder.com/50"
// //                 alt="Value Icon"
// //                 style={styles.valueIcon}
// //               />
// //               <p>Value 4</p>
// //             </div>
// //           </div>
// //           <button
// //             style={styles.exploreButton}
// //             onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
// //             onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
// //           >
// //             Explore our Services
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutUs;










// // import React, { useState } from "react";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";

// // const AboutUs = () => {
// //   const styles = {
// //     aboutUs: {
// //       padding: "20px",
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //     },
// //     aboutContainer: {
// //       display: "flex",
// //       flexWrap: "wrap",
// //       maxWidth: "1200px",
// //       gap: "20px",
// //     },
// //     imageSection: {
// //       flex: 1,
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //     },
// //     sketch: {
// //       maxWidth: "100%",
// //       height: "auto",
// //       borderRadius: "10px",
// //     },
// //     contentSection: {
// //       flex: 1,
// //       textAlign: "left",
// //     },
// //     heading: {
// //       fontSize: "2rem",
// //       marginBottom: "10px",
// //     },
// //     paragraph: {
// //       marginBottom: "20px",
// //       fontSize: "1rem",
// //       lineHeight: "1.6",
// //     },
// //     values: {
// //       display: "flex",
// //       flexWrap: "wrap",
// //       gap: "10px",
// //       marginBottom: "20px",
// //     },
// //     value: {
// //       display: "flex",
// //       alignItems: "center",
// //       gap: "10px",
// //       flex: "1 1 calc(50% - 10px)",
// //       cursor: "pointer",
// //       transition: "transform 0.2s ease",
// //     },
// //     valueIcon: {
// //       width: "70px", // Increased from 50px
// //       height: "70px", // Increased from 50px
// //       borderRadius: "8px",
// //       transition: "transform 0.2s ease",
// //     },
// //     valueIconHover: {
// //       transform: "scale(1.05)",
// //     },
// //     exploreButton: {
// //       backgroundColor: "#ff6b6b",
// //       color: "white",
// //       padding: "10px 20px",
// //       border: "none",
// //       borderRadius: "5px",
// //       cursor: "pointer",
// //       fontSize: "1rem",
// //     },
// //     modalImage: {
// //       width: "100%",
// //       maxWidth: "400px",
// //       height: "auto",
// //       borderRadius: "8px",
// //     },
// //     "@media (maxWidth: 768px)": {
// //       aboutContainer: {
// //         flexDirection: "column",
// //       },
// //       value: {
// //         flex: "1 1 100%",
// //       },
// //       heading: {
// //         fontSize: "1.5rem",
// //       },
// //     },
// //   };

// //   const values = [
// //     { id: 1, title: "Value 1", image: "/api/placeholder/200/200" },
// //     { id: 2, title: "Value 2", image: "/api/placeholder/200/200" },
// //     { id: 3, title: "Value 3", image: "/api/placeholder/200/200" },
// //     { id: 4, title: "Value 4", image: "/api/placeholder/200/200" },
// //   ];

// //   return (
// //     <section style={styles.aboutUs}>
// //       <div style={styles.aboutContainer}>
// //         <div style={styles.imageSection}>
// //           <img
// //             src="/api/placeholder/400/400"
// //             alt="Architectural Sketch"
// //             style={styles.sketch}
// //           />
// //         </div>
// //         <div style={styles.contentSection}>
// //           <h2 style={styles.heading}>About Us</h2>
// //           <p style={styles.paragraph}>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
// //             lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit
// //             amet, consectetur adipiscing elit.
// //           </p>
// //           <div style={styles.values}>
// //             {values.map((value) => (
// //               <Dialog key={value.id}>
// //                 <DialogTrigger asChild>
// //                   <div 
// //                     style={styles.value}
// //                     onMouseOver={(e) => {
// //                       e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
// //                     }}
// //                     onMouseOut={(e) => {
// //                       e.currentTarget.querySelector('img').style.transform = 'scale(1)';
// //                     }}
// //                   >
// //                     <img
// //                       src={value.image}
// //                       alt={`${value.title} Icon`}
// //                       style={styles.valueIcon}
// //                     />
// //                     <p>{value.title}</p>
// //                   </div>
// //                 </DialogTrigger>
// //                 <DialogContent>
// //                   <img
// //                     src={value.image}
// //                     alt={`${value.title} Large`}
// //                     style={styles.modalImage}
// //                   />
// //                   <h3 className="text-lg font-semibold mt-4">{value.title}</h3>
// //                   <p className="mt-2">
// //                     Detailed description of {value.title} goes here. Click outside to close.
// //                   </p>
// //                 </DialogContent>
// //               </Dialog>
// //             ))}
// //           </div>
// //           <button
// //             style={styles.exploreButton}
// //             onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
// //             onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
// //           >
// //             Explore our Services
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutUs;






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






// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import energylogo from "/src/energylogo.jpg";
// import { FaBolt } from 'react-icons/fa';

// const Aboutus = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const productImages = [
//     {
//       id: 1,
//       url: "/public/aboutuspic.jpeg",
//       alt: "Service view 1"
//     },
//     {
//       id: 2,
//       url: "/public/newaboutuspic.jpeg",
//       alt: "Service view 2"
//     },
//     {
//       id: 3,
//       url: "/public/aboutusfinalpic.jpeg",
//       alt: "Service view 3"
//     }
//   ];

//   const features = [
//     {
//       title: "ENERGIZED DESIGN",
//       description: "Modern and energetic design solutions tailored to transform your space into a vibrant environment",
//       icon: <FaBolt/>,
//     },
//     {
//       title: "QUALITY BUILD",
//       description: "Premium materials and expert craftsmanship ensuring lasting durability and elegance",
//       icon: "/api/placeholder/80/80"
//     },
//     {
//       title: "PERFECT FINISH",
//       description: "Meticulous attention to detail in every project, delivering flawless results that exceed expectations",
//       icon: "/api/placeholder/80/80"
//     }
//   ];

//   useEffect(() => {
//     let interval;
//     if (isAutoPlaying && !isHovered) {
//       interval = setInterval(() => {
//         setCurrentImage((prev) => (prev + 1) % productImages.length);
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, isHovered, productImages.length]);

//   const handlePrevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
//     setIsAutoPlaying(false);
//   };

//   const handleNextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % productImages.length);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <section className="w-full relative bg-gradient-to-b from-orange-100 to-orange-100 min-h-screen py-16 lg:py-24">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//           About Us
//         </h1>
//         <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-gray-400 to-orange-700 mx-auto"></div>
//       </div>

//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
//               {/* <div className="bg-white p-3 md:p-4 lg:p-6"> */}
//                 <div
//                   className="relative aspect-[4/3] md:aspect-square w-full overflow-hidden group"
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                 >
//                   <img
//                     src={productImages[currentImage].url}
//                     alt={productImages[currentImage].alt}
//                     className={`object-cover w-full h-full transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'
//                       }`}
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

//                   <button
//                     onClick={handlePrevImage}
//                     className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
//                   >
//                     <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
//                   </button>

//                   <button
//                     onClick={handleNextImage}
//                     className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
//                   >
//                     <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
//                   </button>

//                   <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
//                     {productImages.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => {
//                           setCurrentImage(index);
//                           setIsAutoPlaying(true);
//                         }}
//                         className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 
//                           ${currentImage === index
//                             ? 'bg-white w-4 md:w-6'
//                             : 'bg-white/60 hover:bg-white/80'}`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               {/* </div> */}
//             </div>

//             <div className="flex flex-col justify-center space-y-6 md:space-y-8">
//               <div className="text-center lg:text-left">
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
//                   Complete Design Solutions
//                 </h2>
//                 <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//                   We provide comprehensive design and build services tailored to your needs,
//                   ensuring excellence in every project we undertake. Our team brings creativity
//                   and expertise to transform your vision into reality.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="group bg-white p-4 md:p-6 hover:shadow-lg
//                              transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <div className="flex flex-col items-center text-center">
//                       <div className="w-16 md:w-20 aspect-square bg-gradient-to-br from-orange-50 to-orange-100 
//                                     rounded-full flex items-center justify-center mb-3 md:mb-4
//                                     group-hover:scale-110 transition-transform duration-300">
//                         <img
//                           src={feature.icon}
//                           alt={feature.title}
//                           className="w-8 md:w-10 aspect-square object-contain"
//                         />
//                       </div>
//                       <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
//                         {feature.title}
//                       </h3>
//                       <p className="text-xs md:text-sm text-gray-600">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Aboutus;




















import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaBolt, FaTools, FaPaintBrush } from 'react-icons/fa';

const Aboutus = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const productImages = [
    {
      id: 1,
      url: "/aboutuspic.jpeg",
      alt: "Service view 1"
    },
    {
      id: 2,
      url: "/newaboutuspic.jpeg",
      alt: "Service view 2"
    },
    {
      id: 3,
      url: "/aboutusfinalpic.jpeg",
      alt: "Service view 3"
    }
  ];

  const features = [
    {
      title: "ENERGIZED DESIGN",
      description: "Modern and energetic design solutions tailored to transform your space into a vibrant environment",
      icon: <FaBolt size={32} className="text-orange-500" />,
    },
    {
      title: "QUALITY BUILD",
      description: "Premium materials and expert craftsmanship ensuring lasting durability and elegance",
      icon: <FaTools size={32} className="text-orange-500" />
    },
    {
      title: "PERFECT FINISH",
      description: "Meticulous attention to detail in every project, delivering flawless results that exceed expectations",
      icon: <FaPaintBrush size={32} className="text-orange-500" />
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % productImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, productImages.length]);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
    setIsAutoPlaying(false);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="w-full relative bg-gradient-to-b from-orange-100 to-orange-100 min-h-screen py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-center text-orange-500 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
        At Interior Design Studio, We craft bespoke Interiors that Blend Creativity, Functionality, and Timeless Style.
        We transform Spaces into Stories that reflect your Unique Vision and Lifestyle.
        </p>
        {/* <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-gray-400 to-orange-700 mx-auto"></div> */}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
              <div
                className="relative aspect-[4/3] md:aspect-square w-full overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={productImages[currentImage].url}
                  alt={productImages[currentImage].alt}
                  className={`object-cover w-full h-full transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                    }`}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
                </button>

                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImage(index);
                        setIsAutoPlaying(true);
                      }}
                      className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 
                          ${currentImage === index
                          ? 'bg-white w-4 md:w-6'
                          : 'bg-white/60 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
                  Complete Design Solutions
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We provide comprehensive design and build services tailored to your needs,
                  ensuring excellence in every project we undertake. Our team brings creativity
                  and expertise to transform your vision into reality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white p-4 md:p-6 hover:shadow-lg
                             transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 md:w-20 aspect-square bg-gradient-to-br from-orange-50 to-orange-100 
                                    rounded-full flex items-center justify-center mb-3 md:mb-4
                                    group-hover:scale-110 transition-transform duration-300">
                        {typeof feature.icon === 'string' ? (
                          <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-8 md:w-10 aspect-square object-contain"
                          />
                        ) : (
                          feature.icon
                        )}
                      </div>
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;