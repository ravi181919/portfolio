import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Home, Navbar, Projects, Skill, Contact } from "./components/index";
const App = () => {
  return (
    <div className="w-full overflow-hidden  dark:bg-zinc-800 dark:text-white/65  bg-zinc-200">
      <Navbar />
      <Home />
      <Projects />
      <Skill />
      <Contact />
    </div>
  );
};

export default App;
