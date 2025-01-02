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

const projects = [
  { id: 1, alt: "Project 1" },
  { id: 2, alt: "Project 2" },
  { id: 3, alt: "Project 3" },
];

const Projects = () => {
  return (
    <section className="projects-section py-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">PROJECTS</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Delectus voluptatum distinctio quos eius excepturi sunt pariatur,
          aut, doloribus officia ea molestias beatae laudantium, quam odio
          ipsum veritatis est maiores velit quasi blanditiis et natus
          accusamus itaque.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center"
          >
            <p className="text-gray-500">{project.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
