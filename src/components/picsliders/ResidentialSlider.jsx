import React from "react";
import { PicSlider } from "./PicSlider"; // Assuming this is your carousel component

// Import all images here
import idsbanner from "/src/idsbanner.png";
import CollageBanner from "/src/CollageBanner.png";
import HomeInteriorDesignBanner from "/src/HomeInteriorDesignBanner.png";
import OurProjects from "/allprojectsbanner.png"
import CommercialProjects from "/commercialprojectsbanner.png"
import ResidentialProjects from "/residentialbanner.png"
import RetailProjects from "/retailprojects.png"

// Define the images for the carousel
const IMAGES = [
    { url: OurProjects, alt: "Our Projects" },
    { url: ResidentialProjects, alt: "Our Projects" },
    { url: RetailProjects, alt: "Our Projects" },
   { url: CommercialProjects, alt: "Our Projects" },
   // Add more images here
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Image Slider Section */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div style={{ width: "100%", height: "100%" }}>
          {/* Pass the images array to the ImageSlider component */}
          <PicSlider images={IMAGES} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
















