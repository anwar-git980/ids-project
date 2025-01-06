import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";

function Projects({ image, projects, clients, experience }) {
  const { ref, inView } = useInView({
    threshold: 0.01, // Trigger animation when 1% of the component is in view
    triggerOnce: false, // Reanimates every time the section comes into view
  });

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4"
    >
      <div
        ref={ref}
        className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center max-w-6xl mx-auto"
      >
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={image}
            alt="Project showcase"
            className="w-full h-auto object-cover"
          />
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
          <p className="mt-6 text-gray-700 text-center lg:text-left">
            Lorem ipsum viverra feugiat. Pellentesque libero ut justo, ultrices
            in ligula. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non quae, fugiat ad libero ut justo lorem dolor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
