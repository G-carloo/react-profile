import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i />
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
