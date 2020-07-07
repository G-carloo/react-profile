import React from "react";
import "./App.css";
import NavBar from "../src/components/layout/Navbar";
import Landingpage from "./components/pages/Landingpage";
import About from "./components/pages/About";
import Passion from "./components/pages/Passion";
import Experience from "./components/pages/Experience";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import MyForm from "./components/pages/Form";
import Footer from "./components/pages/Footer";

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Landingpage />
      <About />
      <Passion />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
