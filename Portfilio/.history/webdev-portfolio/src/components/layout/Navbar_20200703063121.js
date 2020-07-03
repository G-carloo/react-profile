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
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
