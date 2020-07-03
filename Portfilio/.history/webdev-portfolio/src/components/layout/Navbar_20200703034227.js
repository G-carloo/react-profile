import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  const 

  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  );
};

Navbar.defaultProps = {
  title: "Ganief Carloo",
  icon: "",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
