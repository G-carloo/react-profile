import React from "react";
import PropTypes from "prop-types";
import icon from "./Icon.jpg";

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
  icon: <img src='Icon.jpg' />,
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.isRequired,
};

export default Navbar;
