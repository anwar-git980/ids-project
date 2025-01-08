import React from 'react';
import idsbanner from '/src/idsbanner.png';
import CollageBanner from '/src/CollageBanner.png'

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
