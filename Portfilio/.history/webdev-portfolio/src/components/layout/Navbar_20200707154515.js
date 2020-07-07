import React from "react";
import PropTypes from "prop-types";

const navbar = {
  backgroundcolor: "blue",
};

const Navbar = ({ title }) => {
  return (
    <nav className='navbar navbar-expand-sm sm-dark navbar-dark sticky'>
      <h1>
        <i />
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