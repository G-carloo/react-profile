import React from "react";

const navbar = {
  backgroundcolor: "blue",
};

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-dark sticky' style={navbar}>
      <h1>
        <i />
        <pr>Ganief Carloo</pr>
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

export default Navbar;
