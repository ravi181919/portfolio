import React, { useEffect, useState } from "react";
import iconsArray from "./icons";
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
    HomePageApiCall();
  }, []);
  return (
    <div className="w-full flex lg:py-20 lg:gap-10 lg:items-center flex-col justify-center lg:px-20 px-7 h-[65vh] lg:h-[79vh]">
    <div className="flex items-center justify-center w-full h-1/2 mt-44">
      <h1 className="leading-1 select-none cursor-text font-black dark:text-white/65 backdrop-blur-lg text-black/75 lg:text-[3vw] text-[5.5vw] lg:w-[69%] w-full text-center">
        {githubData.bio}
      </h1>
    </div>
    <div className="w-full flex items-center justify-center gap-16 py-20 px-2 overflow-x-scroll overflow-y-hidden scrollbar-hidden">
      {iconsArray.map((Icon, index) => (
        <div key={index} className="flex-shrink-0"> {/* Prevent shrinking to ensure visibility */}
          <Icon size={35} />
        </div>
      ))}
      {iconsArray.map((Icon, index) => (
        <div key={index} className="flex-shrink-0"> 
          <Icon size={35} />
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Home;
