import React from "react";
import {Route, Router, Routes} from 'react-router-dom'
import { Home, Navbar, Projects, Skill } from "./components/index";
const App = () => {

  return (
    <div
      className="w-full overflow-hidden dark:bg-zinc-800 dark:text-white/65  bg-zinc-200"
    >
      
      {/* <Router> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router> */}
    <Navbar />
      <Home />
      <Projects />
      <Skill />
    </div>
  );
};

export default App;
