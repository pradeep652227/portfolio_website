const projects = [
  {
    title: "Blogify",
    brief: "A full-stack blogging platform with authentication and post management.",
    skills: ["React", "Redux", "Node.js", "MongoDB"],
    isLive: true,
    liveUrl: "#",
    codeUrl: "#",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "E-Commerce API",
    brief: "Scalable RESTful API for e-commerce applications.",
    skills: ["ASP.NET Core", "PostgreSQL", "Dapper"],
    isLive: false,
    liveUrl: "#",
    codeUrl: "#",
    image: "https://via.placeholder.com/300",
  },
]

export default function HomeProjects() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.brief}</p>
            <div className="mt-4 space-x-4">
              <a href={project.codeUrl} className="text-blue-600 hover:underline">
                GitHub
              </a>
              {project.isLive && (
                <a href={project.liveUrl} className="text-green-600 hover:underline">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

