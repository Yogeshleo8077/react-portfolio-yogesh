import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 px-6 md:px-12 lg:px-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-neutral-900 rounded-lg cursor-pointer shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h6 className="text-lg font-semibold text-blue-400 hover:underline text-center">
                {project.title}
              </h6>
            </a>
            <p className="text-neutral-400 text-sm text-center mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center mt-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 rounded bg-purple-800 px-3 py-1 text-xs font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;