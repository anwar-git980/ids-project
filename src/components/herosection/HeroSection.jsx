// import React from "react";
// import { ImageSlider } from "./ImageSlider"; // Assuming this is your carousel component

// // Import all images here
// import idsbanner from "/src/idsbanner.png";
// import CollageBanner from "/src/CollageBanner.png";
// import HomeInteriorDesignBanner from "/src/HomeInteriorDesignBanner.png";

// // Define the images for the carousel
// const IMAGES = [
//   { url: CollageBanner, alt: "Collage Banner" },
//   { url: idsbanner, alt: "IDS Banner" },
//   { url: HomeInteriorDesignBanner, alt: "Home Interior Design Banner" },
//   // Add more images here
// ];

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-screen">
//       {/* Image Slider Section */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         <div style={{ width: "100%", height: "100%" }}>
//           {/* Pass the images array to the ImageSlider component */}
//           <ImageSlider images={IMAGES} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from "react";
import { ImageSlider } from "./ImageSlider";
import CollageBanner from "/src/CollageBanner.png";
// import HomeInteriorDesignBanner from "/src/HomeInteriorDesignBanner.png";
import IDSBanner1 from "/src/IDSBanner1.png";
// import mainidsbanner from "/src/mainidsbanner.jpeg";
import forthidsbanner from "/src/forthidsbanner.png";
import OurServices from "/ourservicesbanner.png"
import OurProjects from "/allprojectsbanner.png"
import DesignHome from "/interiordesignhomebanner.png"
// Define the images for the carousel
const IMAGES = [
  // { url: mainidsbanner, 
  //   alt: "main ids banner" 
  // },
  { url: IDSBanner1, 
    alt: "IDS Banner" 
  },
  { url: DesignHome, 
    alt: "Design Home" 
  },
  { url: OurServices, 
    alt: "Our Services" 
  },
  { url: OurProjects, 
    alt: "Our Projects" 
  },  
  { url: CollageBanner, 
    alt: "Collage Banner"
  },
  // Add more images here
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-[110vh]">
      {/* Image Slider Section */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div style={{ width: "100%", height: "100%" }}>
          {/* Pass the images array to the ImageSlider component */}
          <ImageSlider images={IMAGES} />
        </div>
      </div>
    </div>

  );
};

export default HeroSection;




// import React from "react";
// import { ImageSlider } from "./ImageSlider";
// import CollageBanner from "/src/CollageBanner.png";
// // import HomeInteriorDesignBanner from "/src/HomeInteriorDesignBanner.png";
// import IDSBanner1 from "/src/IDSBanner1.png";
// import mainidsbanner from "/src/mainidsbanner.jpeg";
// import forthidsbanner from "/src/forthidsbanner.png";

// // Define the images for the carousel
// const IMAGES = [
//   { url: CollageBanner, 
//     alt: "Collage Banner"
//   },
//   { url: mainidsbanner, 
//     alt: "main ids banner" 
//   },
//   { url: IDSBanner1, 
//     alt: "IDS Banner" 
//   },
//   { url: forthidsbanner, 
//     alt: "forth ids banner" 
//   },
//   // Add more images here
// ];

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-[120vh]">
//       {/* Image Slider Section */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         <div style={{ width: "100%", height: "100%" }}>
//           {/* Pass the images array to the ImageSlider component */}
//           <ImageSlider images={IMAGES} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


















// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-screen">
//       {/* Banner Image */}
//       <img
//         src={CollageBanner}
//         alt="Banner"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

//       {/* Optional Content Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-transparent to-black md:to-transparent md:bg-gradient-to-r">
//         {/* <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
//           Welcome to IDS Studio
//         </h1> */}
//       </div>
//     </div>
//   );
// };


















// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-screen">
//       {/* Banner Image */}
//       <img
//         src={CollageBanner}
//         alt="Banner"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

//       {/* Optional Content Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-transparent to-black md:to-transparent md:bg-gradient-to-r">
//         {/* <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
//           Welcome to IDS Studio
//         </h1> */}
//       </div>
//     </div>
//   );
// };