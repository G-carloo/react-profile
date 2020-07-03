import React from "react";
import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Landingpage from "./components/page/Landingpage";
import About from "./components/page/About";
import Passion from "./components/page/Passion";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Landingpage />
      <About />
      <Passion />
    </div>
  );
};

export default App;
