import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i /> {title}
      </h1>
      <ul className='ul'>
        <li>
          <strong>Home</strong>
        </li>
        <li>
          <strong>About</strong>
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
