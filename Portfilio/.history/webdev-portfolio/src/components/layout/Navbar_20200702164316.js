import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark"
    id="navbar">
      <!-- Brand -->
      <a class="navbar-brand" href="#">Admin</a>

      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="Homepge.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="NewsFeed.html">News Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Admin.html">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="Users.html">Users</a>
        </li>   </ul>
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
