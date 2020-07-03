import React from "react";
import PropTypes from "prop-types";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i /> {title}
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
            <strong>What I know</strong>
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
  icon: { keyboard_arrow_down },
};

https: Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Navbar;
