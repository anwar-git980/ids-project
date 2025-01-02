import React from 'react';
import idsbanner from '/src/idsbanner.png';
import CollageBanner from '/src/CollageBanner.png'
import Idsbanner from '/src/idsbanner.png';
import { ImageSlider } from "./ImageSlider"


const IMAGES = [
  { url: CollageBanner, alt: "Collage" },
  { url: Idsbanner, alt: "IDS" },
]


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Banner Image */}
      <img
        src={CollageBanner}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Optional Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-transparent to-black md:to-transparent md:bg-gradient-to-r">
        {/* <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
          Welcome to IDS Studio
        </h1> */}
      </div>


      {/* Image Slider Section */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div style={{ width: "100%", height: "100%" }}>
          <ImageSlider images={IMAGES} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


















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

