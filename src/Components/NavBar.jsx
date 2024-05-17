import React from "react";
import logo from "../assets/yogeshLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-8 w-12" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex justify-center items-center gap-4 text-2xl cursor-pointer">
        <a href="https://www.linkedin.com/in/yogesh-kushwah13/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Yogeshleo8077" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/Yogesh_13_2000" target="_blank">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/yogeshkushwah_13/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
