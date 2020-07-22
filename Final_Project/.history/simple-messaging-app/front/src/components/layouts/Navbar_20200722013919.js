import React from "react";
import PropTypes from "prop-types";
import upoutlined from "@ant-design/icons";

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='h1'>
          <i className={icon} /> {icon}
          Simple Messaging
        </h1>
        <ul className='ul'>
          <li>Search Bar</li>
          <li>More Info</li>
        </ul>
      </ul>
      <ul className='ul'>
        <li>Camera</li>
        <li>Chats</li>
        <li>Calls</li>
      </ul>
    </div>
  );
};

Navbar.protoTypes = {
  //   title: PropTypes.string.isRequired,
  //   icon: PropTypes.string,
};

Navbar.defaultProps = {
  //   title: "Simple Messaging",
  //   icon: "upoutlined",
};

export default Navbar;
