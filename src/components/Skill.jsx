import React from "react";
import { SiHyperskill } from "react-icons/si";
import Heading from "./Heading";
import { motion } from "framer-motion";
const Skill = () => {
  const mySkills = [
    { nameOfTechnologyOrLanguage: "HTML", performanceInThis: 85 },
    { nameOfTechnologyOrLanguage: "CSS", performanceInThis: 85 },
    { nameOfTechnologyOrLanguage: "JavaScript", performanceInThis: 79 },
    { nameOfTechnologyOrLanguage: "Tailwind", performanceInThis: 80 },
    { nameOfTechnologyOrLanguage: "React Js", performanceInThis: 75 },
    { nameOfTechnologyOrLanguage: "API ", performanceInThis: 85 },
  ];

  return (
    <div className="lg:w-full lg:h-screen w-full h-[70vh] lg:px-20 px-3 my-5 dark:text-white/65 text-black/75">
      <div className="flex flex-col h-full">
        {/* Heading */}
        <Heading title="My Skills" Icon={SiHyperskill} />

        {/* Skills */}
        <div className="flex items-center justify-evenly h-[100%] overflow-x-auto scrollbar-hidden gap-6">
          {mySkills.map((skills, index) => (
            <div
              className="flex flex-col h-[100%]  items-center justify-end gap-2 w-fit bg-blac px-2 flex-shrink-0"
              key={index}
            >
            
             <motion.div
              initial={{y: skills.performanceInThis}}
              animate={{y: 0}}
              transition={{
                duration:3, 
                ease: 'linear'
              }}
                style={{ height: `${skills.performanceInThis}%` }}
                className="w-5 dark:bg-white/65 bg-black/75 rounded-t-lg"
              ></motion.div>
          
              <h1 className="text-center whitespace-wrap w-16 font-medium ">
                {skills.nameOfTechnologyOrLanguage}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
