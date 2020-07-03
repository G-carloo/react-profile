import React from "react";
import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Landingpage from "./components/page/Landingpage";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>Learn React</header>
    </div>
  );
};

export default App;
