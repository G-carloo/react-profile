import React from "react";
import "./App.css";
import NavBar from "../src/components/layout/Navbar";
import Landingpage from "./components/page/Landingpage";
// import About from "./components/page/About";
import Passion from "./components/page/Passion";
import Experience from "./components/page/Experience";
import { Work } from "./components/page/Work";
import Contact from "./components/page/Contact";
import LightboxExample from "react-image-lightbox";

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Landingpage />
      <About />
      <Passion />
      <Experience />
      <Work />
      <LightboxExample />
      <Contact />
    </div>
  );
};

export default App;
