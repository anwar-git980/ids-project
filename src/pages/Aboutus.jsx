import React, { useState } from 'react';

function Aboutus({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Open modal with the selected image
  const handleViewClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="aboutus" className="min-h-screen bg-orange-100 flex flex-col items-center py-10">
      {/* Bold and appealing "About Us" title at the top */}
      <h1 className="text-5xl font-extrabold text-orange-800 mb-12 text-center uppercase tracking-widest">
        About Us
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-orange-700">
            Who We Are
          </h2>
          <p className="text-orange-600 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            tortor in elit feugiat tincidunt. We are committed to delivering
            excellence and fostering innovation in everything we do.
          </p>
          <p className="text-orange-600 leading-relaxed">
            Nulla facilisi. Curabitur vel lorem nec ligula consectetur
            vestibulum. Donec sed eros non lorem eleifend interdum. Join us on
            our journey to make a difference!
          </p>
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