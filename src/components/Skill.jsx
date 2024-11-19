import React from "react";
import { SiHyperskill } from "react-icons/si";
import Heading from "./Heading";
import { motion } from "framer-motion";

const Skill = () => {
  const mySkills = [
    {
      nameOfTechnologyOrLanguage: "HTML",
      performanceInThis: 93,
      bgColor: "#364953",
    },
    {
      nameOfTechnologyOrLanguage: "CSS",
      performanceInThis: 90,
      bgColor: "#5A5549",
    },
    {
      nameOfTechnologyOrLanguage: "JavaScript",
      performanceInThis: 85,
      bgColor: "#37B99C",
    },
    {
      nameOfTechnologyOrLanguage: "Tailwind",
      performanceInThis: 87,
      bgColor: "#2D8DC1",
    },
    {
      nameOfTechnologyOrLanguage: "React Js",
      performanceInThis: 83,
      bgColor: "#E06153",
    },
    {
      nameOfTechnologyOrLanguage: "API",
      performanceInThis: 85,
      bgColor: "#5485C5",
    },
    {
      nameOfTechnologyOrLanguage: "Framer",
      performanceInThis: 70,
      bgColor: "#E67553",
    },
    {
      nameOfTechnologyOrLanguage: "GSAP",
      performanceInThis: 72,
      bgColor: "#FECEA9",
    },
    {
      nameOfTechnologyOrLanguage: "Locomotive",
      performanceInThis: 80,
      bgColor: "#A6A6A6",
    },
  ];

  return (
    <div className="lg:w-full lg:h-screen w-full h-[60vh] lg:px-10 dark:text-white/65 text-black/75">
      <div className="flex flex-col h-full">
        {/* Heading */}
        <Heading title="My Skills" Icon={SiHyperskill}/>

        {/* Skills */}
        <div className="flex items-center justify-evenly w-full mb-2 h-full overflow-x-auto scrollbar-hidden gap-2">
          {mySkills.map((skills, index) => (
            <div
              className="flex flex-col h-full items-center justify-evenly gap-2 w-fit px-5 flex-shrink-0"
              key={index}
            >
              <div className="h-full flex items-end overflow-hidden w-full relative pt-10">
                <motion.div
                  initial={{ y: skills.performanceInThis, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                  transition={{ duration: 1, ease: "linear" }}
                  style={{
                    height: `${skills.performanceInThis}%`,
                    backgroundColor: `${skills.bgColor}`,
                  }}
                  className="w-full rounded-t-lg relative skill-bar px-4"
                  data-tooltip={`${skills.performanceInThis}%`}
                ></motion.div>
              </div>

              <motion.h1
                className="text-center text-xs whitespace-nowrap w-16 h-9 font-medium"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                {skills.nameOfTechnologyOrLanguage}
                <span
                  style={{ color: `${skills.bgColor}` }}
                  className="text-xs ml-1"
                >
                  {skills.performanceInThis}%
                </span>
              </motion.h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
