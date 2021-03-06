import React from "react";
import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Landingpage from "./components/page/Landingpage";
import About from "./components/page/About";
import Passion from "./components/page/Passion";
import Experience from "./components/page/Experience";
import Work from "./components/page/Work";
import Contact from "./components/page/Contact";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Landingpage />
      <About />
      <Passion />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
