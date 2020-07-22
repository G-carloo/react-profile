import React from "react";

const Navbar = ({ icon, title }) => {
  return <div className='navbar bg-primary'>
      <h1>
          <i className={icon}{title}></i>
      </h1>
  </div>;
};

export default Navbar;
