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

        {/* Right Dynamic Grid Section */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6">
          {/* Display dynamic images */}
          {images && images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className="relative group bg-black h-40 w-full flex items-center justify-center overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Dynamic ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center cursor-pointer"
                  onClick={() => handleViewClick(image)}
                >
                  <span className="text-white font-bold text-lg">View</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-2">
              No images available. Please provide image URLs.
            </p>
          )}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative">
            {/* Display selected image in full-screen */}
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-screen h-screen object-contain"
            />
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white bg-red-600 px-4 py-2 rounded-full text-lg"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Aboutus;