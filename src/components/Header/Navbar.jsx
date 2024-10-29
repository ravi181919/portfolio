import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode enabling
  useEffect(() => {
    const theme = document.documentElement.classList;
    if (darkMode) {
      theme.remove("light");
      theme.add("dark");
    } else {
      theme.remove("dark");
      theme.add("light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full relative">
      <div className="w-full lg:px-0 lg:py-1 relative overflow-hidden lg:max-w-screen-lg lg:mx-auto flex items-center justify-center">
        <div className="p-2 w-full h-12 relative flex justify-between items-center ">
          <div className="logoContainer relative rounded-full w-7 flex items-center duration-100 justify-center">
            {darkMode ? (
              <img
                src= "/website/w_favicon.ico"  
                alt="logo"
                className="logo w-full h-full object-cover rounded-full lg:rounded-lg"
              />
            ) : (
              <img
                src="/website/favicon.ico"
                alt="logo"
                className="logo w-full h-full object-cover rounded-full lg:rounded-lg"
              />
            )}
          </div>
          <div className="w-fit py-2 px-2">
            <ul className="w-full flex items-center lg:gap-20 gap-5 justify-center">
              <li className="font-medium cursor-pointer text-xs lg:text-sm">
                Home
              </li>
              <li className="font-medium cursor-pointer text-xs lg:text-sm">
                Skills
              </li>
              <li className="font-medium cursor-pointer text-xs lg:text-sm">
                Projects
              </li>
              <li className="font-medium cursor-pointer text-xs lg:text-sm">
                Contact
              </li>
              <li className="hidden lg:block font-medium cursor-pointer text-xs lg:text-sm">
                LinkedIn
              </li>
            </ul>
          </div>
          <div className="hidde  flex items-center justify-center gap-3 lg:gap-5">
            <span
              className={`text-md lg:text-xl duration-100 ${
                !darkMode ? "text-white" : "text-black"
              }  ${
                darkMode ? "bg-zinc-100" : "bg-zinc-800"
              } p-[6px] rounded-lg`}
            >
              <FaGithub />
            </span>
            <span
              onClick={() => setDarkMode((prev) => !prev)}
              className={`text-md lg:text-xl duration-100 ${
                !darkMode ? "text-white" : "text-black"
              }  ${
                darkMode ? "bg-zinc-100" : "bg-zinc-800"
              } p-[6px] rounded-lg`}
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
