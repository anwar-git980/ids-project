import React, { useState } from 'react';
import PaintingSlider from '/src/components/picsliders/PaintingSlider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import paintingone from "/public/paintingone.jpg";
import paintingtwo from "/public/paintingtwo.jpg";
import paintingthree from "/public/paintingthree.png";

const Painting = () => {
  const services = [
    {
      id: 1,
      title: "Surface Preparation Skills",
      description: "At Interior Designer Studio, We focus on preparing surfaces thoroughly to ensure a smooth and lasting finish.",
      image: "/public/paintingone.jpg",
      details: [
        "Our painting process includes cleaning, priming, and repairing surfaces to achieve the best results, even on challenging substrates."
      ]
    },
    {
      id: 2,
      title: "Color Consultation",
      description: "We help our clients choose the perfect color schemes to set the desired mood and ambiance.",
      image: "/public/paintingtwo.jpg",
      details: [
        "Our team understands color psychology and uses it to create spaces that evoke the right emotions, enhancing both aesthetics and functionality."
      ]
    },
    {
      id: 3,
      title: "Specialized Finishes",
      description: "We offer a variety of painting finishes that add character and uniqueness to any space.",
      image: "/public/paintingthree.png",
      details: [
        "Our expertise includes texture painting, faux finishes, and waterproof coatings, ensuring both beauty and durability."
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
        <PaintingSlider />
      </div>

      <div className="text-center mb-8 p-8">
        <h1 className="text-4xl md:text-5xl mb-4">Painting Services</h1>
        <p className="text-base text-black max-w-2xl mx-auto">
        Adding Life to Walls with Impeccable Finishes and Vibrant Hues.
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

export default Painting;