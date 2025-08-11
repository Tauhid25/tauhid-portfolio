// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Tauhidur Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
