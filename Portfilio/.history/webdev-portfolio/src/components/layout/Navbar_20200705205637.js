import React from "react";
import PropTypes from "prop-types";
import About from "./components/pages/About";
import Passion from "./components/pages/Passion";
import Experience from "./components/pages/Experience";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i />
        {icon}
        {title}
      </h1>
      <ul className='ul'>
        <li>
          <a href='#About'>
            <strong>About me</strong>
          </a>
        </li>
        <li>
          <a href='#Passion'>
            <strong>Passion</strong>
          </a>
        </li>
        <li>
          <a href='#Experience'>
            <strong>Experience</strong>
          </a>
        </li>
        <li>
          <a href='#Work'>
            <strong>My work</strong>
          </a>
        </li>
        <li>
          <a href='#Contact'>
            <strong>Contact</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "MGC",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
