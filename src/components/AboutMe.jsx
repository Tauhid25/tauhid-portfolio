// // src/components/AboutMe.jsx
// import React from "react";
// import profilePic from "../assets/profile.jpg";

// const AboutMe = () => {
//   return (
//     <section
//       id="about"
//       className="bg-white py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center md:items-start gap-12"
//     >
//       {/* Left side: Text */}
//       <div className="md:w-1/2">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           About Me
//         </h2>
//         <p className="text-gray-600 leading-relaxed mb-4">
//           I am Tauhidur Rahman, a passionate and detail-oriented MERN Stack
//           Developer with a strong foundation in modern web technologies. My
//           focus is on building responsive, user-friendly, and high-performance
//           applications that provide real value to users.
//         </p>
//         <p className="text-gray-600 leading-relaxed mb-4">
//           I have experience in React, Node.js, Express, MongoDB, Firebase, and
//           more. I love solving complex problems and turning ideas into reality
//           through clean and efficient code. My goal is to grow as a developer
//           while contributing to impactful projects.
//         </p>
//         <a
//           href="#contact"
//           className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
//         >
//           Contact Me
//         </a>
//       </div>

//       {/* Right side: Image */}
//       <div className="md:w-1/2 flex justify-center">
//         <img
//           src={profilePic}
//           alt="Tauhidur Rahman"
//           className="w-80 h-80 object-cover rounded-xl shadow-lg"
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

// src/components/AboutMe.jsx
import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex justify-center py-16 px-4 md:px-8 lg:px-16 "
    >
      <div className="w-full bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Decorative element */}
            <div className="hidden md:block w-2 h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
            
            <div className="w-full">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  About <span className="text-blue-600">Me</span>
                </h2>
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am <span className="font-semibold text-blue-600">Tauhidur Rahman</span>, a passionate and detail-oriented <span className="font-medium">MERN Stack Developer</span> with a strong foundation in modern web technologies. My focus is on building responsive, user-friendly, and high-performance applications that provide real value to users.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  I specialize in <span className="font-medium">React, Node.js, Express, MongoDB, and Firebase</span>. I love solving complex problems and turning ideas into reality through clean and efficient code. My goal is to grow as a developer while contributing to impactful projects.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 font-medium"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech stack showcase */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm text-sm font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
