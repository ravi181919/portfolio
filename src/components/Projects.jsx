import React, { useState, useEffect, useRef } from "react";
import axios from "../utils/axios";
import { GoProjectRoadmap } from "react-icons/go";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // GitHub Repo
  const gitHubProjectHandler = async () => {
    try {
      const { data } = await axios.get("/ravi181919/repos");
      const filter = data.filter((repos) => repos.homepage);
      setProjects(filter); 
      // setProjects(data) // if you wnat to show all repos 
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
    }
  };

  useEffect(() => {
    gitHubProjectHandler();
  }, []);

  document.title = 'Ravi Gupta | Projects'
  return projects.length > 0 ? (
    <div className="w-full flex flex-col justify-center items-center dark:text-white/65 backdrop-blur-lg text-black/75">
      {/* Heading */}
      <div className="w-full h-fit flex items-center justify-center lg:py-10 py-2 lg:mb-0 mb-10">
        <div className="w-fit lg:px-10 px-7 flex justify-center items-center gap-4 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg py-2">
          <h1 className="text-center w-full font-semibold leading-none tracking-tighter lg:text-[2vw] text-[7vw]">
            Projects
          </h1>
          <GoProjectRoadmap
            size={35}
            className="dark:text-white/65 text-black/75"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="w-full lg:py-1 mb-10  overflow-x-auto scrollbar-hidden lg:w-full dark:text-white/65  text-black/75 h-fit flex items-center  justify-start gap-4 lg:px-5 px-4">
        {projects.length > 0 ? (
          projects.map((repo) => <Card key={repo.id} projects={repo} />)
        ) : (
          <h1>Sorry, Data is not Available</h1>
        )}
      </div>
    </div>
  ) :  <h1>Sorry, Data is not Available</h1>
};

export default Projects;
