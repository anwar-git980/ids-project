// import React from 'react'

// function Projects() {
//   return (
//     <section id="projects" className="h-screen bg-gray-400 flex items-center justify-center">
//       <h2 className="text-3xl font-bold">Our Projects</h2>
//     </section>
//   )
// }

// export default Projects

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import projectpic from "/src/projectpic.jpg"

function Projects({ image, projects, clients, experience }) {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: false,
  });

  return (
    <section
      id="projects"
      className="min-h-screen bg-amber-50 flex flex-col items-center px-4 pt-16"
    >
      {/* Projects Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
        Projects
      </h2>

      <div
        ref={ref}
        className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center max-w-6xl mx-auto"
      >
        {/* Image Section with Hover Effect */}
        <div className="rounded-lg overflow-hidden shadow-md group transition-all duration-300 transform hover:scale-105">
          <div className="relative">
            <img
              src={projectpic}
              alt="Project showcase"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
              </span>
            </div>
          </div>
        </div>

        {/* Numbers Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800">
                {inView && <CountUp start={0} end={projects} duration={5} />}+
              </h3>
              <p className="text-lg text-gray-600">Projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">
                {inView && <CountUp start={0} end={clients} duration={5} />}+
              </h3>
              <p className="text-lg text-gray-600">Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">
                {inView && <CountUp start={0} end={experience} duration={5} />}+
              </h3>
              <p className="text-lg text-gray-600">Years of Experience</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;