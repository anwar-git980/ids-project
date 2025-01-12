import React from "react";
import { MdHomeRepairService } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaPaintRoller } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

function Services() {
  const services = [
    {
      title: "Trunkey Contract",
      description:
        "From concept to completion, we handle every detail of your project with unmatched expertise, delivering ready-to-use spaces that exceed expectations.",
      icon: <MdHomeRepairService />,
      link: "/ServicesPages/trunkey",
    },
    {
      title: "Interior Services",
      description:
        "Crafting functional and inspiring interiors that blend innovative design, quality materials, and personalized solutions to create spaces that feel like home.",
      icon: <MdAddHomeWork />,
      link: "/ServicesPages/interior",
    },
    {
      title: "Civil Services",
      description:
        "From foundation to finish, we bring structures to life with precision engineering, quality craftsmanship, and a commitment to long-lasting value.",
      icon: <MdEngineering />,
      link: "/ServicesPages/civil",
    },
    {
      title: "Exterior Services",
      description:
        "Creating striking and durable exteriors that seamlessly blend aesthetics with resilience, leaving a lasting impression on every project we touch.",
      icon: <BiSolidBuildingHouse />,
      link: "/ServicesPages/exterior",
    },
    {
      title: "Painting Services",
      description:
        "Bringing walls to life with vibrant colors and flawless finishes, our painting solutions add personality, protection, and perfection to every surface.",
      icon: <FaPaintRoller />,
      link: "/ServicesPages/painting",
    },
    {
      title: "Electrical Services",
      description:
        "Empowering your spaces with cutting-edge electrical solutions, ensuring safety, sustainability, and seamless performance for years to come.",
      icon: <MdElectricBolt />,
      link: "/ServicesPages/electrical",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-4">
          Services
        </h1>
        {/* <h6 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Services
        </h6> */}
        <p className="text-center text-orange-500 mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          We provide comprehensive care solutions tailored to the needs of our customers.
        </p>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-orange-100 hover:bg-orange-200"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-gray-800">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="bg-[#ea580c] text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
        <br></br>
      </div>
    </section>
  );
}

export default Services;