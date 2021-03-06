import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-success a'>
      <h1>
        <Link className=''></Link>
        <i /> {title}
      </h1>
      <ul className='ul'>
        <li>
          <strong>About me</strong>
        </li>
        <li>
          <strong>Passion</strong>
        </li>
        <li>
          <strong>Experience</strong>
        </li>
        <li>
          <strong>My work</strong>
        </li>
        <li>
          <strong>Contact</strong>
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
