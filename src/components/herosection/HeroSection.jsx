import React from "react";
import ImageSlider from "./ImageSlider";// Assuming this is your carousel component
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
  {
    url: IDSBanner1,
    alt: "IDS Banner"
  },
  {
    url: DesignHome,
    alt: "Design Home"
  },
  {
    url: OurServices,
    alt: "Our Services"
  },
  {
    url: OurProjects,
    alt: "Our Projects"
  },
  {
    url: CollageBanner,
    alt: "Collage Banner"
  },
  // Add more images here
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
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
















