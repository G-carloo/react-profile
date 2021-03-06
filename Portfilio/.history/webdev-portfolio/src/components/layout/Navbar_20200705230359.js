import React from "react";
import PropTypes from "prop-types";
import FireOutLined from "@ant-design/icons";

// const navbar = {
//   backgroundcolor: "blue",
// };

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-danger'>
      <h1>
        <i />
        {icon}
        {title}
      </h1>
      <ul className='ul'>
        <li>
          <a href='#About'>
            <strong>About me</strong>
          </a>
        </li>
        <li>
          <a href='#Passion'>
            <strong>Passion</strong>
          </a>
        </li>
        <li>
          <a href='#Experience'>
            <strong>Experience</strong>
          </a>
        </li>
        <li>
          <a href='#Work'>
            <strong>My work</strong>
          </a>
        </li>
        <li>
          <a href='#Contact'>
            <strong>Contact</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "MGC",
  icon: FireOutLined,
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.icon.isRequired,
};

export default Navbar;
