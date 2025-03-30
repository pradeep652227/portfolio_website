import React from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom';
// ----- Social Links Styling -----
const socialImgStyles = { width: "60px" }
const socialImgClasses = "p-1 rounded-xl w-fit shadow-xl hover:shadow-2xl duration-200 shadow-gray-500"

const SocialLinks = () => (
  <div className="flex flex-col items-center">
    <h1 className="text-2xl font-bold mb-4 text-indigo-700">Connect</h1>
    <div className="flex flex-wrap justify-center gap-4">
      <motion.a 
        href="https://www.linkedin.com/in/pradeep-gaur-0384331a1/" 
        target="_blank" 
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="images/linkedin.png" alt="LinkedIn" className={socialImgClasses} style={socialImgStyles} />
      </motion.a>
      <motion.a 
        href="https://github.com/pradeep652227" 
        target="_blank" 
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="images/github.png" alt="GitHub" className={socialImgClasses} style={socialImgStyles} />
      </motion.a>
      <motion.a 
        href="https://leetcode.com/u/ps652227/" 
        target="_blank" 
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="images/leetcode.png" alt="LeetCode" className={socialImgClasses} style={socialImgStyles} />
      </motion.a>
      <motion.a 
        href="https://www.geeksforgeeks.org/user/pradeep_/" 
        target="_blank" 
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="images/twitter.png" alt="X" className={socialImgClasses} style={socialImgStyles} />
      </motion.a>
    </div>
  </div>
)

// ----- Quick Stats Component -----
const QuickStats = () => {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Years Experience", value: "1+" },
    { label: "DSA Problems", value: "150+" },
    { label: "Scalable & Secure Applications" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg text-white text-center"
        >
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm opacity-90">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                Hi, I'm <span className="text-indigo-600">Pradeep Gaur</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-6"
              >
                Professional Backend Developer | Building Scalable & Secure Full-Stack Applications
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300"
                  onClick = {() => navigate('/contact')}
                >
                  Hire Me
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/file/d/1-xvRAwofX4BrRhOhS0n056LJDS7fCDjM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
                >
                  View Resume
                </motion.a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1 shadow-xl">
                <img
                  src="images/profile_pic.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <QuickStats />
            </motion.div>
          </div>

          {/* Center Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-lg h-full"
            >
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                Software Developer specializing in backend development with expertise in NodeJS, ExpressJS, and MongoDB.
                Proficient in crafting full-stack web applications using front-end technologies such as ReactJS. I excel
                at tackling complex challenges with strong problem-solving abilities and a solid grasp of OOP principles.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                A strong advocate for teamwork, I believe that collaboration leads to greater success and drives company
                growth. My passion lies in creating efficient, scalable solutions that make a real impact.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}