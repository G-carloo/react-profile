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
          <strong>About me</strong>
        </li>
        <li>
          <strong>Passion</strong>
        </li>
        <li>
          <strong>What I know</strong>
        </li>
        <li>
          <strong>My work</strong>
        </li>
        <li>
          <strong>Contact</strong>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Moegamat Ganief Carloo",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
