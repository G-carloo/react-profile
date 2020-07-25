import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar bg-dark sticky'>
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
      {/* <a href='javascript:void(0);' class='icon' onclick='myFunction()'>
        <i class='fa fa-bars'></i>
      </a> */}
    </nav>
  );
};

export default Navbar;
