import React from "react";
import PropTypes from "prop-types";
import Landingpage from "./components/page/Landingpage";
import About from "./components/page/About";
import Passion from "./components/page/Passion";
import Experience from "./components/page/Experience";
import Work from "./components/page/Work";
import Contact from "./components/page/Contact";

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
          <a href='#'>
            <strong>About me</strong>
          </a>
        </li>
        <li>
          <a href='#'>
            <strong>Passion</strong>
          </a>
        </li>
        <li>
          <a href='#'>
            <strong>Experience</strong>
          </a>
        </li>
        <li>
          <a href='#'>
            <strong>My work</strong>
          </a>
        </li>
        <li>
          <a href='#'>
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
