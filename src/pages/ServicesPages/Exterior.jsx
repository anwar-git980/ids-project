import React, { useState } from 'react';
import ExteriorSlider from '/src/components/picsliders/ExteriorSlider';
import { ChevronDown, ChevronUp } from 'lucide-react';


const Exterior = () => {
  const services = [
    {
      id: 1,
      title: "Durability and Quality Craftsmanship",
      description: "At Interior Designer Studio, using premium materials and skilled workmanship to ensure the exterior withstands weather and time.",
      image: "/exteriorone.jpg",
      details: [
        "At Interior Designer Studio, we ensure durability and quality craftsmanship in every exterior project. We use premium materials and expert techniques, ensuring that our designs withstand harsh weather and stand the test of time. Our skilled team focuses on attention to detail and rigorous quality checks, delivering long-lasting, low-maintenance exteriors with impeccable finishes."
      ]
    },
    {
      id: 2,
      title: "Aesthetic and Functional Design",
      description: "Combining visual appeal with practical solutions tailored to the project’s requirements.",
      image: "/exteriortwo.jpg",
      details: [
        "We work closely with clients to design beautiful spaces that are practical and tailored to their needs. From optimizing outdoor areas to selecting materials that enhance curb appeal, our designs ensure both style and usability, perfectly aligned with the client’s lifestyle."
      ]
    },
    {
      id: 3,
      title: "Timely and Cost-Effective Execution",
      description: "Delivering projects on schedule, within budget, without compromising quality.",
      image: "/exteriorthree.jpg",
      details: [
        "We ensure timely and cost-effective exterior contracts by carefully planning, managing resources, and working with trusted suppliers. Through efficient design and proactive communication, we deliver high-quality, on-time projects within budget, offering great value to our clients."
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
        <ExteriorSlider />
      </div>

      <div className="text-center mb-8 p-8">
        <h1 className="text-4xl md:text-5xl mb-4">Exterior Services</h1>
        <p className="text-base text-black max-w-2xl mx-auto">
          Combining Quality, Experience and Timely Delivery at the Right Price.
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

export default Exterior;