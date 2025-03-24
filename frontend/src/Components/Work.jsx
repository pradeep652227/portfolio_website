"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }) // Initialize animation
  }, [])

  const experiences = [
    {
      role: "Backend Developer",
      company: "Orion Infosolutions",
      duration: "Dec 2024 - Present",
      description: [
        "Worked on <strong>real-time multiplayer games</strong> using Node.JS and Socket.IO, handling <strong>event-based communication</strong>.",
        "Developed and maintained a <strong>Ludo game</strong> with four variants, optimizing game logic, <strong>bot automation</strong>, and smooth gameplay.",
        "Implemented <strong>ranking systems</strong> and automated leaderboards using <strong>Cron Jobs</strong> and <strong>MongoDB Aggregation Pipelines</strong>.",
        "Integrated <strong>Payment Gateway</strong> functionality with secure transaction creation, <strong>webhook</strong> processing, and wallet crediting.",
        "Designed and developed <strong>Admin Portals</strong> using EJS, Express.js, and MongoDB with improved frontend usability.",
        "Followed a <strong>modular architecture</strong>, ensuring scalability and maintainability by dividing projects into Socket, Admin, and API layers.",
      ],
      skills: ["Node.js", "Express.js", "Socket.IO", "EJS", "NoSQL", "MongoDB", "Cron Jobs"],
      logo: "orion.png",
    },
    {
      role: "Software Developer",
      company: "Autovyn Consultancy Pvt. Ltd.",
      duration: "Jun 2024 - Dec 2024",
      description: [
        "Developed and maintained robust <strong>RESTful APIs</strong> using <strong>ASP.NET Core Web API</strong>.",
        "Implemented <strong>background services</strong> for real-time workshop status notifications using <strong>Firebase</strong>.",
        "Worked on a <strong>three-layer architecture</strong>, following <strong>Clean Code, OOP, and SOLID principles</strong>.",
        "Optimized <strong>MS SQL Server</strong> and <strong>PostgreSQL</strong> databases with complex queries, improving application speed.",
        "Enhanced security measures with <strong>JWT-based authentication</strong> and authorization.",
      ],
      skills: ["ASP.NET Core Web API", "SQL", "MS SQL Server", "PostgreSQL"],
      logo: "autovyn.jpg",
    },
    {
      role: "Full Stack Developer (Freelance)",
      company: "Self-Employed",
      duration: "2023 - 2024",
      description: [
        "Developed and deployed multiple <strong>full-stack applications</strong> using <strong>React, Next.js, and Node.js</strong>.",
        "Designed <strong>scalable database structures</strong> and optimized frontend performance.",
      ],
      skills: ["React.js", "Next.js", "Node.js", "MongoDB", "REST APIs"],
      logo: "freelance.jpg",
    },
  ]

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Experience</h2>

      <div className="relative border-l-4 border-indigo-300 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start" data-aos="fade-up">
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-2 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full">
              <img src={`images/${exp.logo}`} alt={exp.company} className="w-6 h-6" />
            </div>

            {/* Experience Card */}
            <div className="bg-white shadow-md p-6 rounded-lg w-full border border-gray-200 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-700">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>

              {/* Description List */}
              <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
                {exp.description.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
              </ul>

              {/* Key Skills */}
              {exp.skills && (
                <div className="mt-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

