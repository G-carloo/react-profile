import React from "react";

const Navbar = () => {
  return;
  <nav className='navbar bg-primary'>
    <h1>
      <i className={icon} /> {title}
    </h1>
    <ul className='ul'>
      <li>
        <Link to='/'>
          <strong>Home</strong>
        </Link>
      </li>
      <li>
        <Link to='/about'>
          <strong>About</strong>
        </Link>
      </li>
    </ul>
  </nav>;
};

export default Navbar;
