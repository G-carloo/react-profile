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
      <Landingpage className='stars' />
      <header className='text-center'>Learn React</header>
      <About />
      <Passion />
    </div>
  );
};

export default App;
