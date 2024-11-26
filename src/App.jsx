import React, { useEffect } from "react";
import {
  Home,
  Navbar,
  Projects,
  Skill,
  Contact,
  Footer,
} from "./components/index";
const App = () => {
  useEffect(() => {
    document.title = "Ravi Gupta";
  }, [])

  return (
    <div className="w-full overflow-hidden  dark:bg-zinc-800 dark:text-white/65  bg-zinc-200">
      <Navbar />
      <Home />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
