import React from "react";
import Navbar from "./components/layouts/Navbar";
import "./App.css";
import Camera from "./components/layouts/Camera";
import Calls from "./components/layouts/Messages";
import About from "./components/pages/About";
import Search from "./components/pages/More";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
    </div>
  );
};

export default App;
