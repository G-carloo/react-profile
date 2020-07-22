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
        <h1 className='h1'>
          <i>
            {" "}
            <outlined />
          </i>
          Simple Messaging
        </h1>
        <ul className='sp'>
          <SearchOutlined />

          <MoreOutlined />
        </ul>
      </ul>
      <ul className='ul'>
        <h3>
          <li>
            <CameraOutlined />
          </li>
          <li>Chats(Amount of messages)</li>
          <li>Calls(Amount of calls)</li>
        </h3>
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
