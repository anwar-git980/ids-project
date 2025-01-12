// /====>>>latest<<====
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
        <p className="text-center text-orange-500 mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
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