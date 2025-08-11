import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    level: "Expert",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    level: "Expert",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    level: "Advanced",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400" />,
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    level: "Intermediate",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-400" />,
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    level: "Intermediate",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" />,
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    level: "Advanced",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-orange-600" />,
    level: "Advanced",
  },
];

const MySkill = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          My Skills
        </h2>
        <p className="text-gray-600 mb-12">
          Here are the technologies and tools I work with to bring ideas to
          life.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <span className="text-sm text-gray-500">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkill;
