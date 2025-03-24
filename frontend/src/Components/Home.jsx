import { Link } from "react-router-dom";
// ----- Social Links Styling -----
const socialImgStyles = { width: "60px" };
const socialImgClasses =
  "p-1 rounded-xl w-fit shadow-xl hover:shadow-2xl duration-200 shadow-gray-500";

// ----- Other Sections -----
const ExperienceSection = () => (
  <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold mb-2 text-indigo-700">Experience</h3>
    <p className="text-sm text-gray-600">
      Overview of your roles, responsibilities, and achievements.
    </p>
  </div>
);

const ProjectsSection = () => (
  <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold mb-2 text-indigo-700">Projects</h3>
    <p className="text-sm text-gray-600">
      Showcase of your personal or professional projects.
    </p>
  </div>
);

const ContactSection = () => (
  <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold mb-2 text-indigo-700">Contact</h3>
    <p className="text-sm text-gray-600">
      Preferred contact details (email, LinkedIn, etc.).
    </p>
  </div>
);

const SocialLinks = () => (
  <div className="flex flex-col items-center">
    <h1 className="text-2xl font-bold mb-4 text-indigo-700">Connect</h1>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/pradeep-gaur-0384331a1/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="images/linkedin.png"
          alt="LinkedIn"
          className={socialImgClasses}
          style={socialImgStyles}
        />
      </a>
      <a
        href="https://github.com/pradeep652227"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="images/github.png"
          alt="GitHub"
          className={socialImgClasses}
          style={socialImgStyles}
        />
      </a>
      <a
        href="https://leetcode.com/u/ps652227/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="images/leetcode.png"
          alt="LeetCode"
          className={socialImgClasses}
          style={socialImgStyles}
        />
      </a>
      <a href="https://x.com/pradeep_gaur1" target="_blank" rel="noreferrer">
        <img
          src="images/twitter.png"
          alt="X"
          className={socialImgClasses}
          style={socialImgStyles}
        />
      </a>
    </div>
  </div>
);

// ----- Achievements Component -----
const Achievements = () => (
  <div className="mt-6">
    <ul className="space-y-3">
      {[
        "1+ year of professional experience in backend development",
        "10+ projects covering full stack tech stacks",
        "200+ DSA problems solved",
        "Expert in scalable and secure system design",
        "Strong teamwork and leadership skills",
      ].map((item, index) => (
        <li
          key={index}
          className="flex items-center text-sm text-gray-600 border border-indigo-200 rounded-lg p-2 hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-2" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// ----- Home Component -----
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center font-sans bg-gray-50 text-gray-800">
      {/* Main Content in Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
        {/* Left Column (Profile / Title) */}
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-center items-center">
          {/* Circular Image Placeholder */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1 mb-4 shadow-md">
            <img
              src="images/profile_pic.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-indigo-700">
            Pradeep Gaur
          </h1>
          <p className="text-md text-gray-600 mb-4 text-center">
            Professional Backend Developer | Building Scalable & Secure
            Full-Stack Applications
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 text-sm font-medium">
            <Link to="/contact">Hire Me</Link>
          </button>
        </div>

        {/* Center Column (Hero Info) */}
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-center">
          <p className="text-md text-gray-600 mb-4 text-justify">
            Software Developer specializing in backend development with
            expertise in NodeJS, ExpressJS, and MongoDB. Proficient in crafting
            full-stack web applications using the front-end technologies such as
            ReactJS. I excel at tackling complex challenges with strong
            problem-solving abilities and a solid grasp of OOP principles. A
            strong advocate for teamwork, I believe that collaboration leads to
            greater success and drives company growth.
          </p>
          <button className="px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 text-sm font-medium">
            <a
              href="https://drive.google.com/file/d/1-xvRAwofX4BrRhOhS0n056LJDS7fCDjM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              View Resume
            </a>
          </button>
        </div>

        {/* Right Column (Social Links) */}
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-center">
          <SocialLinks />
          <Achievements />
        </div>
      </main>
    </div>
  );
}
