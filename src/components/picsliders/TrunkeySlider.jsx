import React from "react";
import { PicSlider } from "./PicSlider"; // Assuming this is your carousel component

// Import all images here
import idsbanner from "/src/idsbanner.png";
import CollageBanner from "/src/CollageBanner.png";
import HomeInteriorDesignBanner from "/src/HomeInteriorDesignBanner.png";
import OurServices from "/ourservicesbanner.png"
import TrunkeyServices from "/trunkeyservicesbanner.png"
import InteriorServices from "/interiorservices.png"
import CivilServices from "/civilservicesbanner.png"
import ExteriorServices from "/exteriorservicesbanner.png"
import PaintingServices from "/paintingprojectsbanner.png"
import ElectricalServices from "/electricalservicesbanner.png"

// Define the images for the carousel
const IMAGES = [
  { url: OurServices, alt: "Our Services" },
  { url: TrunkeyServices, alt: "Our Services" },
  { url: InteriorServices, alt: "Our Services" },
  { url: CivilServices, alt: "Our Services" },
  { url: ExteriorServices, alt: "Our Services" },
  { url: PaintingServices, alt: "Our Services" },
  { url: ElectricalServices, alt: "Our Services" },
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

















