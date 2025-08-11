// import React from "react";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
//       <div className="flex items-center space-x-1">
//         <img className="w-16 h-16 pt-2" src={logo} alt="" />
//         <h1 className="text-3xl font-bold">Tauhid</h1>
//       </div>
//       <div>
//         <ul className="flex space-x-4">
//           <li>Home</li>
//           <li>About</li>
//           <li>Skills</li>
//           <li>Projects</li>
//         </ul>
//       </div>
//       <div>
//         <button className="btn btn-primary">Get Resume</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img className="w-12 h-12" src={logo} alt="Logo" />
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
            Tauhid
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks}
        </ul>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition duration-200"
          >
            Get Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl text-gray-700" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-[70px] py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
            {navLinks}
            <li>
              <a
                href="/resume.pdf"
                download
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition duration-200"
              >
                Get Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
