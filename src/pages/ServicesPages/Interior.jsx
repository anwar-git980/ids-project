import React, { useState } from 'react';
import InteriorSlider from '/src/components/picsliders/InteriorSlider';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Interior = () => {
  const services = [
    {
      id: 1,
      title: "Space Optimization",
      description: "At Interior Designer Studio, We transform spaces to make the most out of every square foot while maintaining aesthetic appeal.",
      image: "/interiorone.jpg",
      details: [
        "Whether it’s a compact apartment or a spacious office, we ensure that every design element serves a purpose and adds value."
      ]
    },
    {
      id: 2,
      title: "Aesthetic Versatility",
      description: "Our interior designs are tailored to reflect each client's unique taste and lifestyle.",
      image: "/interiortwo.jpg",
      details: [
        "From modern minimalism to classic elegance, we bring versatility to our designs, ensuring timeless and personalized spaces."
      ]
    },
    {
      id: 3,
      title: "Quality Material Selection Expertise",
      description: "We carefully select materials that balance durability, aesthetics, and sustainability.",
      image: "/interiorthree.jpg",
      details: [
        "Our team stays updated with the latest trends in finishes and materials to deliver high-quality results that stand the test of time."
      ]
    }
  ];

  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="w-full bg-white text-orange-500 font-sans pt-16">
      <div className="w-full h-screen flex justify-center items-center overflow-hidden">
        <InteriorSlider />
      </div>

      <div className="text-center mb-8 p-8">
        <h1 className="text-4xl md:text-5xl mb-4">Interior Services</h1>
        <p className="text-base text-black max-w-2xl mx-auto">
        Crafting Interiors that blend Aesthetics, Functionality, and Comfort.
        </p>
      </div>

      <div className="space-y-8 px-4 md:px-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 ? 'md:flex-row-reverse' : ''}`}>
              <div className="group relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>
                <p className="text-black mb-4">{service.description}</p>
                <button 
                  onClick={() => toggleDropdown(service.id)}
                  className="flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors"
                >
                  Learn More
                  {openDropdown === service.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {/* Dropdown Content */}
                <div 
                  className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-black">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
};

export default Interior;