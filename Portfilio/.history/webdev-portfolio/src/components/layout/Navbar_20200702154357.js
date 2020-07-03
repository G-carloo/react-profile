import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-success a'>
      <h1>
        <Link to=''>
          <i /> {title}
        </Link>
      </h1>
      <ul className='ul'>
        <li>
          <Link to=''>
            <strong>About me</strong>
          </Link>
        </li>
        <li>
          <Link to=''>
            <strong>Passion</strong>
          </Link>
        </li>
        <li>
          <Link to=''>
            <strong>Experience</strong>
          </Link>
        </li>
        <li>
          <Link to=''>
            <strong>My work</strong>
          </Link>
        </li>
        <li>
          <Link to=''>
            <strong>Contact</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Ganief Carloo",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
