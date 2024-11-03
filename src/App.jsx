import React from "react";
import { Home, Navbar } from "./components/index";

const App = () => {
  return (
    <div className="w-full dark:bg-zinc-800 dark:text-white/65  bg-zinc-200 h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
