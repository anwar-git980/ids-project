import React from "react";

function Services() {
  const services = [
    {
      title: "Personal Care Assistance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: "👤",
      bgColor: "bg-red-100",
    },
    {
      title: "Specialized Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: "🛏️",
      bgColor: "bg-white",
    },
    {
      title: "Physical Wellness Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: "🏃",
      bgColor: "bg-white",
    },
    {
      title: "Health Consultation Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: "💉",
      bgColor: "bg-white",
    },
    {
      title: "Senior Citizen Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: "👴",
      bgColor: "bg-white",
    },
    {
      title: "Residential Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: "🏠",
      bgColor: "bg-white",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      {/* Container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Services
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          We provide comprehensive care solutions tailored to the needs of our
        </p>

        {/* Grid for services */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${service.bgColor}`}
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-gray-800">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {service.description}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="text-red-500 font-semibold text-sm sm:text-base hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;