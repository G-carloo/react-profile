import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i /> {title}
      </h1>
      <ul className='ul'>
        <li>
          <Link to='/'>
            <strong>About me</strong>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <strong>Passion</strong>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <strong>What I know</strong>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <strong>My work</strong>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <strong>Contact</strong>
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
