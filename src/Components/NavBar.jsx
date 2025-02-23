import React from "react";
import logo from "../assets/yogeshLogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-6 px-8">
      <div className="flex items-center mb-4 md:mb-0">
        <img className="w-12" src={logo} alt="logo" />
      </div>

      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <a href="https://www.linkedin.com/in/yogesh-kushwah13/" target="_blank">
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/Yogeshleo8077" target="_blank">
          <FaGithub className="text-2xl cursor-pointer hover:text-gray-600 transition duration-300" />
        </a>
        <a href="https://x.com/Yogesh_13_2000" target="_blank">
          <FaSquareXTwitter className="text-2xl cursor-pointer hover:text-black transition duration-300" />
        </a>
        <a href="https://www.instagram.com/yogeshkushwah_13/" target="_blank">
          <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition duration-300" />
        </a>
      </div>

      <a
        href="/Yogesh_CV.pdf" // Update the path to your resume file
        download
        className="flex items-center gap-2 px-4 py-2  text-white rounded-lg shadow-md hover:bg-black transition duration-300 text-sm md:text-base"
      >
        <FaDownload className="text-lg" />
        <span>Download Resume</span>
      </a>
    </nav>
  );
};

export default NavBar;
