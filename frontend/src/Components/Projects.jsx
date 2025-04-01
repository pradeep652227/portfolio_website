"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillsImgsStyles = { width: "80px" };
const skillsImgsClasses =
  "p-2 rounded-xl w-fit shadow-lg hover:shadow-2xl duration-200 shadow-gray-500 flex flex-col items-center";

const backendImages = [
  {
    address: "https://img.icons8.com/color/100/nodejs.png",
    name: "NodeJS",
  },
  {
    address: "https://img.icons8.com/ios/100/express-js.png",
    name: "ExpressJS",
  },
  {
    address: "https://img.icons8.com/color/100/mongodb.png",
    name: "MongoDB",
  },
  {
    address: "https://img.icons8.com/ios/100/prisma-orm.png",
    name: "Prisma",
  },
  {
    address:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png",
    name: "PostgreSQL",
  },
  {
    address: "https://img.icons8.com/color/100/microsoft-sql-server.png",
    name: "MS SQL Server",
  },
];

const frontendImages = [
  { address: "https://img.icons8.com/color/100/nextjs.png", name: "NextJS" },
  { address: "images/react.png", name: "React" },
  {
    address:
      "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-shadow-tal-revivo.png",
    name: "Redux",
  },
  {
    address: "https://img.icons8.com/color/100/recoil-js.png",
    name: "Recoil",
  },
  {
    address: "https://img.icons8.com/color/100/tailwindcss.png",
    name: "TailwindCSS",
  },
  {
    address: "https://img.icons8.com/fluency/100/typescript--v1.png",
    name: "TypeScript",
  },
  {
    address: "https://img.icons8.com/color/100/git.png",
    name: "Git",
  },
];

const SkillsSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-8">
    <h1 className="text-4xl text-center font-bold py-2 text-indigo-700">
      Skills
    </h1>
    <div className="rounded-xl mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Backend Skills */}
      <div>
        <h2 className="text-xl font-semibold text-center mb-4 text-indigo-600">
          Backend & Databases
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {backendImages.map((image) => (
            <div
              key={image.name}
              className={skillsImgsClasses + " bg-white hover:bg-gray-50"}
            >
              <img
                style={skillsImgsStyles}
                src={image.address || "/placeholder.svg"}
                alt={image.name}
                className="mb-2"
              />
              <span className="text-gray-600 text-sm opacity-70 hover:opacity-100 transition-opacity duration-300">
                {image.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend & Other Skills */}
      <div>
        <h2 className="text-xl font-semibold text-center mb-4 text-indigo-600">
          Frontend & Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {frontendImages.map((image) => (
            <div
              key={image.name}
              className={skillsImgsClasses + " bg-white hover:bg-gray-50"}
            >
              <img
                style={skillsImgsStyles}
                src={image.address || "/placeholder.svg"}
                alt={image.name}
                className="mb-2"
              />
              <span className="text-gray-600 text-sm opacity-70 hover:opacity-100 transition-opacity duration-300">
                {image.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
// Updated projects data
const projects = [
  {
    title: "Paytm-clone",
    description:
      "A Fintech Web App created with focus on handling transactions in MongoDB and concurrency.",
    image: "paytm-clone.png",
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB"],
    // link: "https://blog-app-frontend-gray.vercel.app/",
    // isLive: true,
    code: "https://github.com/pradeep652227/paytm-clone",
  },
  {
    title: "Blogify",
    description:
      "A full-stack blog application allowing users to create, read, update, and delete blog posts. Features JWT authentication, a rich text editor, and secure APIs.",
    image: "blog-app.png",
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB"],
    link: "https://blog-app-frontend-gray.vercel.app/",
    isLive: true,
    code: "https://github.com/pradeep652227/Full-Stack-Blog-App",
  },
  {
    title: "Asset Management Application",
    description:
      "An asset management system designed to track company assets with role-based access control and detailed reporting.",
    image: "asset-management.png",
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB"],
    link: "https://asset-management-application-frontend.vercel.app/",
    isLive: false,
    code: "https://github.com/pradeep652227/asset-management-application",
  },
  {
    title: "To-Do App NodeJS",
    description:
      "A to-do list app with a MongoDB backend and EJS templating, allowing users to manage their tasks efficiently.",
    image: "todo-app.png",
    technologies: ["Node JS", "Express JS", "MongoDB", "EJS"],
    link: "https://to-do-list-version2-0.onrender.com/",
    isLive: false,
    code: "https://github.com/pradeep652227/To-Do-List-version2.0",
  },
  {
    title: "Authentication and Security",
    description:
      "A security-focused application demonstrating OAuth login, password encryption, and multi-factor authentication.",
    image: "auth-security.png",
    technologies: ["Node JS", "Express JS", "MongoDB", "EJS", "OAuth"],
    link: "https://authentication-and-security.onrender.com/",
    isLive: false,
    code: "https://github.com/pradeep652227/Authentication-And-Security",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-gray-50">
      <SkillsSection />

      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        Projects
      </h2>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-4 rounded-lg shadow-md overflow-hidden flex flex-col h-100"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
            }}
          >
            {/* Project Image */}
            <img
              src={`images/${project.image}`}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Project Title */}
            <h3 className="text-lg font-bold text-indigo-700">
              {project.title}
            </h3>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-indigo-600 text-white text-sm px-3 py-2 rounded hover:bg-indigo-700 transition"
              >
                View Details
              </button>
              {project.isLive && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white text-sm px-3 py-2 rounded hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6 z-50">
          <motion.div
            className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-indigo-700">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <p className="text-gray-700 mt-2">{selectedProject.description}</p>
            <img
              src={`images/${selectedProject.image}`}
              alt={selectedProject.title}
              className="mt-4 rounded-lg"
            />

            {/* Technologies Used */}
            <div className="mt-4">
              <h4 className="font-semibold text-indigo-600">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* View Project Buttons */}
            <div className="mt-4 flex space-x-4">
              {selectedProject.isLive && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
              )}
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
