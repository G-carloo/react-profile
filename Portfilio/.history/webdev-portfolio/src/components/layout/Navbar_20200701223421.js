import React from "react";
import PropTypes from "prop-types";
import { Link } from "router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
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
  icon: "",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
