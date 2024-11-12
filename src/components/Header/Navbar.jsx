import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./nav_style.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const theme = document.documentElement.classList;
    if (darkMode) {
      theme.remove("dark");
      theme.add("light");
    } else {
      theme.remove("light");
      theme.add("dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full relative">
      <div className="w-full lg:px-0 lg:py-1 relative overflow-hidden lg:max-w-screen-lg lg:mx-auto flex items-center justify-center">
        <div className="p-2 w-full h-12 relative flex justify-between items-center ">
          <div className="logoContainer relative rounded-full w-7 flex items-center duration-100 justify-center">
            <img
              src={darkMode ? "/website/w_favicon.ico" : "/website/favicon.ico"}
              alt="Website logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default-fallback.png";
              }}
              className="logo w-full h-full object-cover rounded-full lg:rounded-lg"
            />
          </div>
          <div className="w-fit py-2 px-2">
            <ul className="w-full flex items-center lg:gap-20 gap-5 justify-center">
              <NavLink
                to="/home"
                className="LinkAnimation dark:after:bg-white font-medium cursor-pointer text-xs lg:text-sm"
              >
                Home
              </NavLink>
              <NavLink
                to="/skills"
                className="LinkAnimation dark:after:bg-white font-medium cursor-pointer text-xs lg:text-sm"
              >
                Skills
              </NavLink>
              <NavLink
                to="/projects"
                className="LinkAnimation dark:after:bg-white font-medium cursor-pointer text-xs lg:text-sm"
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="LinkAnimation dark:after:bg-white font-medium cursor-pointer text-xs lg:text-sm"
              >
                Contact
              </NavLink>
              <NavLink
                to="/linkedin"
                className="LinkAnimation dark:after:bg-white hidden lg:block font-medium cursor-pointer text-xs lg:text-sm"
              >
                LinkedIn
              </NavLink>
            </ul>
          </div>
          <div className="hidde flex items-center justify-center gap-3 lg:gap-5">
            <a 
            href={'https://github.com/ravi181919'} 
            target="_blank"
              rel="noopener noreferrer"
            className="text-md lg:text-xl duration-100 text-black dark:text-white bg-zinc-100 dark:bg-zinc-800 p-[6px] rounded-lg">
            <span
              aria-label="Github profile"
              className=""
            >
              <FaGithub />
            </span>
            </a>
            <span
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={toggleDarkMode}
              className="text-md lg:text-xl duration-100 text-black dark:text-white bg-zinc-100 dark:bg-zinc-800 p-[6px] rounded-lg"
            >
              {darkMode ? <FiMoon /> : <MdOutlineLightMode />}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
