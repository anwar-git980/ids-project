// import React from 'react';

// const Trunkey = () => {
//   const mainStory = {
//     title: "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
//     category: "Featured Story",
//     image: "/api/placeholder/600/400"
//   };

//   const sideStories = [
//     {
//       title: "15 South London Markets You'll Love: Best Markets in South London",
//       category: "Shopping",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       title: "10 incredible hotels around the world you can book with points in 2024",
//       category: "Hotels",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       title: "Visiting Chicago on a Budget: Affordable Eats and Attraction Deals",
//       category: "Travel Budget",
//       image: "/api/placeholder/100/100"
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section - Main Story */}
//         <div className="lg:w-2/3">
//           <h1 className="text-2xl font-semibold mb-6">Latest Stories</h1>
//           <div className="bg-gray-100 rounded-lg shadow-sm overflow-hidden">
//             <img 
//               src={mainStory.image}
//               alt={mainStory.title}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <span className="text-sm text-gray-500">{mainStory.category}</span>
//               <h2 className="text-xl font-semibold mt-2 hover:text-blue-600 cursor-pointer transition-colors">
//                 {mainStory.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Side Stories */}
//         <div className="lg:w-1/3">
//           <div className="flex items-center justify-between mb-6">
//             <span className="text-sm text-gray-500">Subscribe</span>
//           </div>
//           <div className="space-y-4">
//             {sideStories.map((story, index) => (
//               <div 
//                 key={index} 
//                 className="bg-gray-100 rounded-lg shadow-sm overflow-hidden"
//               >
//                 <div className="flex gap-4 p-4">
//                   <img 
//                     src={story.image}
//                     alt={story.title}
//                     className="w-24 h-24 object-cover rounded"
//                   />
//                   <div className="flex-1">
//                     <span className="text-sm text-gray-500 block mb-2">
//                       {story.category}
//                     </span>
//                     <h3 className="text-sm font-medium hover:text-blue-600 cursor-pointer leading-tight transition-colors">
//                       {story.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trunkey;




// import React from 'react';

// const Trunkey = () => {
//   const stories = [
//     {
//       id: 1,
//       title: "Los Angeles Guide: Things to try in Los Angeles, California",
//       date: "July 30, 2023",
//       readTime: "4 min read",
//       imageUrl: "/api/placeholder/400/300"
//     },
//     {
//       id: 2,
//       title: "Top 10 Hidden Gems in Downtown LA",
//       date: "July 29, 2023",
//       readTime: "3 min read",
//       imageUrl: "/api/placeholder/400/300"
//     },
//     {
//       id: 3,
//       title: "Best Food Trucks in LA County",
//       date: "July 28, 2023",
//       readTime: "5 min read",
//       imageUrl: "/api/placeholder/400/300"
//     }
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest Stories</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {stories.map((story) => (
//           <div 
//             key={story.id} 
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="relative">
//               <img
//                 src={story.imageUrl}
//                 alt={story.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
//             </div>
            
//             <div className="p-4">
//               <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2 hover:text-blue-600">
//                 {story.title}
//               </h3>
              
//               <div className="flex items-center text-sm text-gray-500 mt-2">
//                 <span>{story.date}</span>
//                 <span className="mx-2">•</span>
//                 <span>{story.readTime}</span>
//               </div>
              
//               <div className="mt-4">
//                 <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
//                   Read More →
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Trunkey ;





// import React from 'react';

// const Trunkey = () => {
//   const stories = [
//     {
//       id: 1,
//       title: "Los Angeles Guide: Things to try in Los Angeles, California",
//       date: "July 30, 2023",
//       readTime: "4 min read",
//       imageUrl: "/api/placeholder/400/300"
//     },
//     {
//       id: 2,
//       title: "Top 10 Hidden Gems in Downtown LA",
//       date: "July 29, 2023",
//       readTime: "3 min read",
//       imageUrl: "/api/placeholder/400/300"
//     },
//     {
//       id: 3,
//       title: "Best Food Trucks in LA County",
//       date: "July 28, 2023",
//       readTime: "5 min read",
//       imageUrl: "/api/placeholder/400/300"
//     }
//   ];

//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
//         <h2 className="text-2xl font-bold mb-8 text-gray-800">Latest Stories</h2>
        
//         <div className="space-y-6">
//           {stories.map((story) => (
//             <div 
//               key={story.id} 
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex flex-col sm:flex-row">
//                 <div className="relative w-full sm:w-1/3">
//                   <img
//                     src={story.imageUrl}
//                     alt={story.title}
//                     className="w-full h-48 sm:h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
//                 </div>
                
//                 <div className="p-6 sm:w-2/3">
//                   <h3 className="font-semibold text-xl mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-200">
//                     {story.title}
//                   </h3>
                  
//                   <div className="flex items-center text-sm text-gray-500 mb-4">
//                     <span>{story.date}</span>
//                     <span className="mx-2">•</span>
//                     <span>{story.readTime}</span>
//                   </div>
                  
//                   <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
//                     Read More →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trunkey;



import React from "react";
// import HeroSection from '/src/components/herosection/HeroSection.jsx';
import TrunkeySlider from '/src/components/picsliders/TrunkeySlider';

const Services = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroWrapper}>
        <TrunkeySlider />
      </div>

      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>Trunkey Contracts</h1>
        <p style={styles.description}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident. Image by Freepik.
        </p>
      </div>

      {/* Services Section */}
      <div style={styles.services}>
        {/* Service 1 */}
        <div style={styles.serviceRow}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Skyscrapers Buildings"
            style={styles.image}
          />
          <div style={styles.textContainer}>
            <h3 style={styles.cardTitle}>Skyscrapers Buildings</h3>
            <p style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div style={styles.serviceRow}>
          <div style={styles.textContainer}>
            <h3 style={styles.cardTitle}>Conceptual Architecture</h3>
            <p style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More
            </a>
          </div>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Conceptual Architecture"
            style={styles.image}
          />
        </div>

        {/* Service 3 */}
        <div style={styles.serviceRow}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Innovative Designs"
            style={styles.image}
          />
          <div style={styles.textContainer}>
            <h3 style={styles.cardTitle}>Innovative Designs</h3>
            <p style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <button
          style={styles.contactButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
        >
          Contact Us
        </button>
      </div>
      <br />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    color: "orange",
    fontFamily: "Arial, sans-serif",
    paddingTop: "4rem", // Adds space for the navbar height
  },
  heroWrapper: {
    width: "100%", // Full width of the viewport
    height: "100vh", // Full height of the viewport
    overflow: "hidden", // Prevent scrollbars
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box", // Ensures padding and borders are included in width/height
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    padding: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0 0 1rem",
  },
  description: {
    fontSize: "1rem",
    color: "black",
  },
  services: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  serviceRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "2rem",
  },
  textContainer: {
    textAlign: "left",
    paddingLeft: "2rem", // Adds space between the browser window and the text
    paddingRight: "2rem", // Optional for symmetric spacing
  },
  cardTitle: {
    fontSize: "1.8rem",
    margin: "0 0 1rem",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "black",
    marginBottom: "1rem",
  },
  learnMore: {
    textDecoration: "none",
    color: "orange",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  footer: {
    textAlign: "center",
    marginTop: "2rem",
  },
  contactButton: {
    backgroundColor: "#f97310", // Default button color
    border: "none",
    borderRadius: "20px",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease", // Smooth hover transition
  },
};

export default Services;






// // import React from "react";
// // import HeroSection from '/src/components/herosection/HeroSection.jsx';

// // const Services = () => {
// //   return (
// //     <div style={styles.container}>
// //       {/* Hero Section */}
// //       <div style={styles.heroWrapper}>
// //         <HeroSection />
// //       </div>

// //       {/* Header Section */}
// //       <div style={styles.header}>
// //         <h1 style={styles.title}>Our Services</h1>
// //         <p style={styles.description}>
// //           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// //           Excepteur sint occaecat cupidatat non proident. Image by Freepik.
// //         </p>
// //       </div>

// //       {/* Services Section */}
// //       <div style={styles.services}>
// //         {/* Service 1 */}
// //         <div style={styles.serviceRow}>
// //           <img
// //             src="https://via.placeholder.com/500x300"
// //             alt="Skyscrapers Buildings"
// //             style={styles.image}
// //           />
// //           <div style={styles.textContainer}>
// //             <h3 style={styles.cardTitle}>Skyscrapers Buildings</h3>
// //             <p style={styles.cardDescription}>
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
// //             </p>
// //             <a href="#" style={styles.learnMore}>
// //               Learn More
// //             </a>
// //           </div>
// //         </div>

// //         {/* Service 2 */}
// //         <div style={styles.serviceRow}>
// //           <div style={styles.textContainerWithPadding}>
// //             <h3 style={styles.cardTitle}>Conceptual Architecture</h3>
// //             <p style={styles.cardDescription}>
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
// //             </p>
// //             <a href="#" style={styles.learnMore}>
// //               Learn More
// //             </a>
// //           </div>
// //           <img
// //             src="https://via.placeholder.com/500x300"
// //             alt="Conceptual Architecture"
// //             style={styles.image}
// //           />
// //         </div>

// //         {/* Service 3 */}
// //         <div style={styles.serviceRow}>
// //           <img
// //             src="https://via.placeholder.com/500x300"
// //             alt="Innovative Designs"
// //             style={styles.image}
// //           />
// //           <div style={styles.textContainer}>
// //             <h3 style={styles.cardTitle}>Innovative Designs</h3>
// //             <p style={styles.cardDescription}>
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
// //             </p>
// //             <a href="#" style={styles.learnMore}>
// //               Learn More
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Footer Section */}
// //       <div style={styles.footer}>
// //         <button style={styles.contactButton}>Contact Us</button>
// //       </div>
// //       <br></br>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     backgroundColor: "#ffffff",
// //     color: "black",
// //     fontFamily: "Arial, sans-serif",
// //     paddingTop: "4rem", // Adds space for the navbar height
// //   },
// //   heroWrapper: {
// //     width: "100%", // Full width of the viewport
// //     height: "100vh", // Full height of the viewport
// //     overflow: "hidden", // Prevent scrollbars
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     boxSizing: "border-box", // Ensures padding and borders are included in width/height
// //   },
// //   header: {
// //     textAlign: "center",
// //     marginBottom: "2rem",
// //     padding: "2rem",
// //   },
// //   title: {
// //     fontSize: "2.5rem",
// //     margin: "0 0 1rem",
// //   },
// //   description: {
// //     fontSize: "1rem",
// //     color: "black",
// //   },
// //   services: {
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "2rem",
// //   },
// //   serviceRow: {
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1fr",
// //     alignItems: "center",
// //     gap: "2rem",
// //   },
// //   textContainer: {
// //     textAlign: "left",
// //   },
// //   textContainerWithPadding: {
// //     textAlign: "left",
// //     paddingLeft: "2rem", // Adds space between the browser window and the text
// //     paddingRight: "2rem", // Optional for symmetric spacing
// //   },
// //   cardTitle: {
// //     fontSize: "1.8rem",
// //     margin: "0 0 1rem",
// //   },
// //   cardDescription: {
// //     fontSize: "1rem",
// //     color: "black",
// //     marginBottom: "1rem",
// //   },
// //   learnMore: {
// //     textDecoration: "none",
// //     color: "#ffc700",
// //     fontWeight: "bold",
// //   },
// //   image: {
// //     width: "100%",
// //     height: "auto",
// //     borderRadius: "8px",
// //   },
// //   footer: {
// //     textAlign: "center",
// //     marginTop: "2rem",
// //   },
// //   contactButton: {
// //     backgroundColor: "#ffc700",
// //     border: "none",
// //     borderRadius: "20px",
// //     padding: "0.75rem 1.5rem",
// //     fontSize: "1rem",
// //     fontWeight: "bold",
// //     color: "black",
// //     cursor: "pointer",
// //   },
// // };

// // export default Services;















// import React from "react";

// function App() {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "20px",
//     height: "100vh",
//     backgroundColor: "#111",
//     color: "white",
//   };

//   const photoSectionStyle = {
//     flex: 1,
//     border: "2px dashed white",
//     marginRight: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "80%",
//     backgroundColor: "#222",
//   };

//   const textSectionStyle = {
//     flex: 1,
//     height: "80%",
//     padding: "20px",
//     border: "2px dashed white",
//     backgroundColor: "#222",
//   };

//   const titleStyle = {
//     fontSize: "36px",
//     marginBottom: "20px",
//     color: "#fff",
//   };

//   const textStyle = {
//     fontSize: "18px",
//     lineHeight: "1.6",
//     color: "#bbb",
//   };

//   // Responsive styles for small screens
//   const mediaQueryStyle = `
//     @media screen and (max-width: 768px) {
//       .container {
//         flex-direction: column;
//       }
//       .photo-section,
//       .text-section {
//         height: auto;
//         margin-right: 0;
//         margin-bottom: 20px;
//       }
//       .text-section h1 {
//         font-size: 28px;
//       }
//       .text-section p {
//         font-size: 16px;
//       }
//     }
//     @media screen and (max-width: 480px) {
//       .photo-section p {
//         font-size: 18px;
//       }
//       .text-section h1 {
//         font-size: 24px;
//       }
//       .text-section p {
//         font-size: 14px;
//       }
//     }
//   `;

//   return (
//     <div>
//       <style>{mediaQueryStyle}</style>
//       <div style={containerStyle}>
//         <div style={photoSectionStyle}>
//           <p>Photo</p>
//         </div>
//         <div style={textSectionStyle}>
//           <h1 style={titleStyle}>Title</h1>
//           <p style={textStyle}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
//             felis lorem. Duis ut vehicula ligula. Integer fringilla lorem id
//             risus lacinia, vitae luctus ex posuere.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;







// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   font-family: 'Arial', sans-serif;
//   padding: 20px;
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   margin-bottom: 50px;

//   h2 {
//     font-size: 36px;
//     color: #333;
//   }

//   p {
//     font-size: 18px;
//     color: #666;
//   }
// `;

// const Specialization = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   margin-bottom: 50px;

//   .item {
//     flex: 1;
//     min-width: 250px;
//     margin: 10px;
//     padding: 20px;
//     background-color: #f5f5f5;
//     border-radius: 8px;
//     text-align: center;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//     h3 {
//       color: #333;
//       margin-top: 10px;
//     }

//     p {
//       color: #666;
//     }
//   }
// `;

// const Projects = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;

//   img {
//     width: 100%;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;

// const App = () => {
//   return (
//     <Container>
//       <SectionHeader>
//         <h2>Our Specialization</h2>
//         <p>We turn great ideas into creative solutions.</p>
//       </SectionHeader>

//       <Specialization>
//         <div className="item">
//           <h3>Green Interior Design</h3>
//           <p>Sustainable and eco-friendly solutions.</p>
//         </div>
//         <div className="item">
//           <h3>Love Space</h3>
//           <p>Designing spaces that inspire and comfort.</p>
//         </div>
//         <div className="item">
//           <h3>Expert Network</h3>
//           <p>Access to top professionals in the field.</p>
//         </div>
//       </Specialization>

//       <SectionHeader>
//         <h2>Our Project</h2>
//       </SectionHeader>

//       <Projects>
//         <img src="https://via.placeholder.com/300" alt="Project 1" />
//         <img src="https://via.placeholder.com/300" alt="Project 2" />
//         <img src="https://via.placeholder.com/300" alt="Project 3" />
//         <img src="https://via.placeholder.com/300" alt="Project 4" />
//         <img src="https://via.placeholder.com/300" alt="Project 5" />
//         <img src="https://via.placeholder.com/300" alt="Project 6" />
//       </Projects>
//     </Container>
//   );
// };

// export default App;


// // import React, { useState } from "react";

// // const Portfolio = () => {
// //   const [selectedCategory, setSelectedCategory] = useState("All");

// //   const portfolioItems = [
// //     { id: 1, category: "Marketing", title: "Astronaut Helmet", image: "https://via.placeholder.com/300/FF007F" },
// //     { id: 2, category: "Design", title: "Brex Logo", image: "https://via.placeholder.com/300/FFC700" },
// //     { id: 3, category: "Development", title: "Business Card", image: "https://via.placeholder.com/300/FFA07A" },
// //   ];

// //   const categories = ["All", "Marketing", "Design", "Development"];

// //   const filteredItems =
// //     selectedCategory === "All"
// //       ? portfolioItems
// //       : portfolioItems.filter((item) => item.category === selectedCategory);

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>Portfolio</h1>
// //       <div style={styles.filters}>
// //         {categories.map((category) => (
// //           <button
// //             key={category}
// //             onClick={() => setSelectedCategory(category)}
// //             style={{
// //               ...styles.filterButton,
// //               backgroundColor: selectedCategory === category ? "#FFC700" : "transparent",
// //               color: selectedCategory === category ? "black" : "white",
// //             }}
// //           >
// //             {category}
// //           </button>
// //         ))}
// //       </div>
// //       <div style={styles.grid}>
// //         {filteredItems.map((item) => (
// //           <div key={item.id} style={styles.card}>
// //             <img src={item.image} alt={item.title} style={styles.image} />
// //             <div style={styles.cardOverlay}>
// //               <h2>{item.title}</h2>
// //               <p>{item.category}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     backgroundColor: "#333",
// //     color: "white",
// //     padding: "2rem",
// //     fontFamily: "Arial, sans-serif",
// //   },
// //   header: {
// //     textAlign: "center",
// //     color: "#FFC700",
// //   },
// //   filters: {
// //     display: "flex",
// //     justifyContent: "center",
// //     marginBottom: "2rem",
// //   },
// //   filterButton: {
// //     border: "1px solid #FFC700",
// //     borderRadius: "20px",
// //     padding: "0.5rem 1rem",
// //     margin: "0 0.5rem",
// //     cursor: "pointer",
// //     fontSize: "1rem",
// //   },
// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
// //     gap: "1rem",
// //   },
// //   card: {
// //     position: "relative",
// //     borderRadius: "10px",
// //     overflow: "hidden",
// //     textAlign: "center",
// //     cursor: "pointer",
// //   },
// //   image: {
// //     width: "100%",
// //     height: "auto",
// //     display: "block",
// //   },
// //   cardOverlay: {
// //     position: "absolute",
// //     bottom: "0",
// //     background: "rgba(0, 0, 0, 0.7)",
// //     color: "white",
// //     width: "100%",
// //     padding: "1rem",
// //   },
// // };

// // export default Portfolio;