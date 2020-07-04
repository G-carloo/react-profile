import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i />
        {icon}
        {title}
      </h1>
      <ul className='ul'>
        <li>
          <a href='#'>
            <strong>About me</strong>
          </a>
        </li>
        <li>
          <a href='#'>
            <strong>Passion</strong>
          </a>
        </li>
        <li>
          <a href='#'>
            <strong>Experience</strong>
          </a>
        </li>
        <li>
          <a href='#'>
            <strong>My work</strong>
          </a>
        </li>
        <li>
          <a href='#'>
            <strong>Contact</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "MGC",
  icon:
    "https://lh3.googleusercontent.com/ckdPXJanjQVpi7drRA-ejfGtccpMG7YwspAIkSSqsxY3jsvGbwjFoau5dSbp_eJOYLGq6a8=s91",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.li.isRequired,
};

export default Navbar;
