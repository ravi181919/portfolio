import React, { useState, useEffect} from "react";
import axios from "../utils/axios";
import { GoProjectRoadmap } from "react-icons/go";
import Card from "./Card";
import Heading from "./Heading";
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
      <Heading title={"Projects"} Icon={GoProjectRoadmap}/>

      {/* Cards */}
      <div className="w-full lg:py-1 mb-10 lg:flex-wrap overflow-x-auto scrollbar-hidden lg:w-full dark:text-white/65  text-black/75 h-fit flex items-center lg:justify-center justify-start gap-4 lg:px-5 px-4">
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
