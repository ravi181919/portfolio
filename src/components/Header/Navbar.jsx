import React from "react";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="w-full relative">
      <div className="w-full lg:px-0 lg:py-1 relative overflow-hidden  lg:max-w-screen-lg lg:mx-auto flex items-center justify-center">
        <div className="p-2 w-full h-12 relative flex justify-between items-center ">
          <div className="logoContainer relative rounded-full w-6 flex items-center justify-center">
            <img
              src="/website/favicon.ico"
              alt="logo"
              className="logo w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="w-fit py-2 px-2">
            <ul className="w-full flex items-center lg:gap-20 gap-5 justify-center">
              <li className="font-medium cursor-pointer text-xs lg:text-sm">Home</li>
              <li className="font-medium cursor-pointer text-xs lg:text-sm">Skills</li>
              <li className="font-medium cursor-pointer text-xs lg:text-sm">Projects</li>
              <li className="font-medium cursor-pointer text-xs lg:text-sm">Contact</li>
            </ul>
          </div>
          <div className="hidde lg:flex items-center justify-center gap-2">
            <h2 className="font-medium text-xs lg:text-sm text-yellow-500 hidden lg:flex">GitHub</h2>
            <span><FaGithub size={25} /></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
