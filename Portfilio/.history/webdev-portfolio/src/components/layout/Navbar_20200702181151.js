import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav class='navbar navbar-expand-sm bg-dark navbar-dark' id='navbar'>
      <a class='navbar-brand' href='#'>
        Ganief Carloo
      </a>

      <ul class='navbar-nav'>
        <li class='nav-item'>
          <a class='nav-link' href=''>
            About me
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='NewsFeed.html'>
            Passion
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='Admin.html'>
            Experience
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link disabled' href='Users.html'>
            My work
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link disabled' href='Users.html'>
            Contact
          </a>
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
