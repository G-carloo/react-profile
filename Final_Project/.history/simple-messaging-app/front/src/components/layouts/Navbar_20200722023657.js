import React from "react";
import PropTypes from "prop-types";
import {
  outlined,
  SearchOutlined,
  MoreOutlined,
  CameraOutlined,
} from "@ant-design/icons";

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='h1'>Simple Messaging</h1>
        <ul className='sp'>
          <a href='#'>
            <SearchOutlined />
          </a>
          <a href='#'>
            <MoreOutlined />
          </a>
        </ul>
      </ul>
      <ul className='ul'>
        <h4>
          <li>
            <a href='#'>
              <CameraOutlined />
            </a>
          </li>
        </h4>
        <h4>
          <a href='#'>
            <li>Chats(Amount of messages)</li>
          </a>
        </h4>
        <h4>
          <a href='#'>
            <li>Calls(Amount of calls)</li>
          </a>
        </h4>
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
