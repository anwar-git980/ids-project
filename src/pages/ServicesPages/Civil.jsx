import React, { useState } from 'react';
import CivilSlider from '/src/components/picsliders/CivilSlider';
import { ChevronDown, ChevronUp } from 'lucide-react';
// import civilone from "/src/civilphotos/civilone.jpg";
import civilone from "/public/civilone.jpg";
import civiltwo from "/public/civiltwo.jpg";
import civilthree from "/public/civilthree.jpg";

const Civil = () => {
  const services = [
    {
      id: 1,
      title: "Expertise in Structural Integrity",
      description: "At Interior Designer Studio, our Expertise in Structural Integrity ensures every design is built on a solid foundation.",
      image: "/public/civilone.jpg",
      details: [
        "We collaborate with engineers to reinforce structures, ensuring safety and compliance. We focus on creating durable, functional spaces that are secure and long-lasting, giving clients peace of mind."
      ]
    },
    {
      id: 2,
      title: "Budget Management and Cost Efficiency",
      description: "We provide Budget Management and Cost Efficiency by creating detailed cost plans, sourcing high-quality yet affordable materials, and optimizing designs to minimize waste. ",
      image: "/public/civiltwo.jpg",
      details: [
        "We ensure transparency, track expenses carefully, and offer creative solutions to maximize value, delivering stunning, functional spaces that align with our clients' budgets without compromising quality or aesthetics."
      ]
    },
    {
      id: 3,
      title: "Attention to Quality and Detail",
      description: "We prioritize Attention to Quality and Detail by meticulously selecting materials, ensuring precision in execution, and focusing on every aspect of the design process.",
      image: "/public/civilthree.jpg",
      details: [
        "From conceptualization to completion, we carefully oversee every detail to maintain the highest standards. Whether it's residential, retail, or commercial spaces, we ensure flawless finishes, functional layouts, and designs that reflect our clients' vision. Our commitment to quality guarantees spaces that are not only beautiful but also durable and perfectly crafted."
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
        <CivilSlider />
      </div>

      <div className="text-center mb-8 p-8">
        <h1 className="text-4xl md:text-5xl mb-4">Civil Services</h1>
        <div className="text-base text-black max-w-2xl mx-auto">
          Strength in Structure, Excellence in Design.
        </div>
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

export default Civil;