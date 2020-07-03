import React from "react";
import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Landingpage from "./components/page/Landingpage";
import About from "./components/page/About";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Landingpage className='stars' />
      <header className='text-center'>Learn React</header>
      <About />
    </div>
  );
};

export default App;
