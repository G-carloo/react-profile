import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i /> {title}
      </h1>
      <ul className='ul'>
        <li>
          <Link to='/'>
            <strong>Home</strong>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <strong>About</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Portfolio",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
