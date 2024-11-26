import React, { useEffect, useState } from "react";
import iconsArray from "./icons";
import { motion } from "framer-motion";
import axios from "../utils/axios";

const Home = () => {
  const [githubData, setGithubData] = useState({});

  const HomePageApiCall = async () => {
    try {
      const { data } = await axios.get("/ravi181919");
      setGithubData(data);
      // console.log(githubData);
    } catch (error) {
      console.log(`Home :: ${error}`);
    }
  };
  useEffect(() => {
    document.title = "Ravi Gupta | Home"
    HomePageApiCall();
  }, []);
  return (
    <div className="w-full  flex lg:py-1 py-1  lg:gap-[65px] lg:items-center  flex-col justify-center lg:px-20  px-7 h-[55vh] lg:h-[90vh]">
      <div className="flex mb-14 lg:mb-0 items-center justify-center w-full h-1/2 lg:mt-14">
        <h1 className="leading-1 select-none cursor-text font-black dark:text-white/65 backdrop-blur-lg text-black/75 lg:text-[3vw] text-[5.5vw] lg:w-[69%] w-full text-center">
          {githubData.bio}
        </h1>
      </div>
      <div className="w-full flex items-center justify-start gap-8 lg:gap-16 py-0 lg:my-2 my-0 px-2 overflow-x-hidden scrollbar-hidden">
        <motion.div
          className="flex gap-8 lg:gap-16"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
          style={{ display: "flex", minWidth: "200%" }}
        >
          {[...iconsArray, ...iconsArray].map((Icon, index) => (
            <div key={index} className="flex-shrink-0">
              <Icon size={35} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
