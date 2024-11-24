import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Navbar, Projects, Skill, Contact,Footer } from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: (
      <div className="w-full overflow-hidden  dark:bg-zinc-800 dark:text-white/65  bg-zinc-200">
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div className="w-full overflow-hidden  dark:bg-zinc-800 dark:text-white/65  bg-zinc-200">
        <Navbar />
        <Projects />
        <Footer />
      </div>
    ),
  },
  {
    path: "/skills",
    element: (
      <div className="w-full overflow-hidden  dark:bg-zinc-800 dark:text-white/65  bg-zinc-200">
        <Navbar />
        <Skill />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div className="w-full overflow-hidden  dark:bg-zinc-800 dark:text-white/65  bg-zinc-200">
        <Navbar />
        <Contact />
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
