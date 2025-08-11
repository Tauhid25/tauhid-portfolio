// src/components/Banner.jsx
import React from "react";
import profileImg from "../assets/profile.jpg"; // replace with your own image

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-yellow-300">Tauhidur Rahman</span>
          </h1>
          <p className="text-lg mb-6">
            I’m a passionate <span className="font-semibold">MERN Stack Developer</span> 
            dedicated to creating user-friendly and high-performance web applications. 
            Let’s build something amazing together!
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-300 text-blue-900 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Tauhidur Rahman"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

