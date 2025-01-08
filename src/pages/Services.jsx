// import React from "react";
// import { MdHomeRepairService } from "react-icons/md";
// import { MdAddHomeWork } from "react-icons/md";
// import { MdEngineering } from "react-icons/md";
// import { BiSolidBuildingHouse } from "react-icons/bi";
// import { FaPaintRoller } from "react-icons/fa";
// import { MdElectricBolt } from "react-icons/md";


// function Services() {
//   const services = [
//     {
//       title: "Trunkey Contract",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
//       icon: <MdHomeRepairService />,
//     },
//     {
//       title: "Interiors Services",
//       description:
//         "We craft inspiring interiors for commercial spaces, blending functionality with captivating design.",
//       icon:<MdAddHomeWork />,
//     },
//     {
//       title: "Civil Services",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
//       icon: <MdEngineering />,
//     },
//     {
//       title: "Exterior Services",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
//       icon: <BiSolidBuildingHouse />,
//     },
//     {
//       title: "Painting Services",
//       description:"Our designers create exceptional wall textures, boosting our interior decoration success.",   
//       icon: <FaPaintRoller />,
//     },
//     {
//       title: "Electrical Services",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
//       icon: <MdElectricBolt />,
//     },
//   ];

//   return (
//     <section id="services" className="py-16 bg-gray-50">
//       {/* Container for content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-12">
//         {/* Section Heading */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
//           Services
//         </h2>
//         <p className="text-center text-orange-500 mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
//           We provide comprehensive care solutions tailored to the needs of our
//         </p>

//         {/* Grid for services */}
//         <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-4 sm:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-orange-100 hover:bg-orange-200"
//             >
//               {/* Icon */}
//               <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-gray-800">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm sm:text-base mb-4">
//                 {service.description}
//               </p>

//               {/* Read More Button */}
//               <button
//                 className="bg-[#ea580c] text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
//               >
//                 Read More →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;







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
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: <MdHomeRepairService />,
      link: "/ServicesPages/trunkey",
    },
    {
      title: "Interiors Services",
      description:
        "We craft inspiring interiors for commercial spaces, blending functionality with captivating design.",
      icon: <MdAddHomeWork />,
      link: "/services/interiors",
    },
    {
      title: "Civil Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: <MdEngineering />,
      link: "/services/civil",
    },
    {
      title: "Exterior Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: <BiSolidBuildingHouse />,
      link: "/services/exteriors",
    },
    {
      title: "Painting Services",
      description:
        "Our designers create exceptional wall textures, boosting our interior decoration success.",
      icon: <FaPaintRoller />,
      link: "/services/painting",
    },
    {
      title: "Electrical Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit integer iaculis dui nibh vitae commodo arcu tempus.",
      icon: <MdElectricBolt />,
      link: "/services/electrical",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Services
        </h2>
        <p className="text-center text-orange-500 mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          We provide comprehensive care solutions tailored to the needs of our
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
      </div>
    </section>
  );
}

export default Services;