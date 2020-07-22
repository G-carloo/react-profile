import React from "react";
import PropTypes from "prop-types";
import { outlined, SearchOutlined, MoreOutlined } from "@ant-design/icons";

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='h1'>
          <i>
            {" "}
            <outlined />
          </i>
          Simple Messaging
        </h1>
        <ul className='sp'>
          <li>
            <SearchOutlined />
          </li>
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
