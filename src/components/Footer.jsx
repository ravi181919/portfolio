import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationLinks = [
    { URL: "/home", name: "Home" },
    { URL: "/skills", name: "Skills" },
    { URL: "/projects", name: "Projects" },
    { URL: "/contact", name: "Contact" },
  ];

  const socialLinks = [
    { URL: "https://www.instagram.com/ravi_79__/", name: "Instagram" },
    {
      URL: "https://www.linkedin.com/in/ravi-gupta-20236b293/",
      name: "LinkedIn",
    },
    {
      URL: "https://www.threads.net/web/?waterfall_id=94132e49-47b4-468e-8573-52f2ef4d3221",
      name: "Threads",
    },
    { URL: "https://x.com/Ravi_79__", name: "Twitter" },
  ];

  const animationSettings = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <footer className="lg:h-[35vh] h-[20vh] lg:py-5 w-full relative skill-bg dark:text-white text-black">
      <div className="flex items-center justify-center lg:px-28 px-8 h-full">
        {/* Logo Section */}
        <div
          onClick={scrollToTop}
          className="w-[40%] flex flex-col items-start justify-center cursor-pointer"
        >
          <motion.h1
            initial={{ x: 100, opacity: 0.3, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={animationSettings}
            className="lg:text-6xl text-3xl font-black tracking-tighter"
          >
            Ravi's
          </motion.h1>
          <motion.h1
            initial={{ x: -100, opacity: 0.3, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={animationSettings}
            className="lg:text-6xl text-3xl font-black tracking-tighter text-yellow-400"
          >
            Portfolio.
          </motion.h1>
        </div>

        {/* Navigation Links */}
        <div className="w-[60%] flex justify-around">
          {/* Main Links */}
          <motion.ul
            initial={{ y: -100, opacity: 0.3 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={animationSettings}
            className="flex flex-col gap-2"
          >
            {navigationLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.URL}
                aria-label={`Navigate to ${link.name}`}
                className="capitalize LinkAnimation font-medium text-xs lg:text-sm dark:after:bg-white"
              >
                {link.name}
              </NavLink>
            ))}
          </motion.ul>

          {/* Social Links */}
          <motion.ul
            initial={{ y: 100, opacity: 0.3 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={animationSettings}
            className="flex flex-col gap-2"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name}`}
                className="capitalize LinkAnimation font-medium text-xs lg:text-sm dark:after:bg-white"
              >
                {social.name}
              </a>
            ))}
          </motion.ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
