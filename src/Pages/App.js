import React from "react";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const App = () => {
  return (
    <div className="snap-y snap-mandatory h-screen w-full scroll-smooth overflow-scroll font-Lato">
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
