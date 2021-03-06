import React from "react";
import PropTypes from "prop-types";
// import { farDownArrow } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i />
        {/* <FontAwesomeIcon icon={farDownArrow} />  */}
        {title}
      </h1>
      <ul className='ul'>
        <li>
          <a href='#'>
            <strong>About me</strong>
          </a>
        </li>
        <li>
          <a>
            <strong>Passion</strong>
          </a>
        </li>
        <li>
          <a>
            <strong>Experience</strong>
          </a>
        </li>
        <li>
          <a>
            <strong>My work</strong>
          </a>
        </li>
        <li>
          <a>
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
