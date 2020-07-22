import React from "react";
import PropTypes from "prop-types";
import {
  outlined,
  SearchOutlined,
  MoreOutlined,
  CameraOutlined,
} from "@ant-design/icons";

const Search = () => {
  return <a href='#' />;
};
const More = () => {
  return <a href='#' />;
};
const Cam = () => {
  return <a href='#' />;
};
const Chats = () => {
  return <a href='#' />;
};
const Calls = () => {
  return <a href='#' />;
};

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='h1'>Simple Messaging</h1>
        <ul className='sp'>
          <SearchOutlined />

          <MoreOutlined />
        </ul>
      </ul>
      <ul className='ul'>
        <h4>
          <li>
            <CameraOutlined onClick={cam} />
          </li>
        </h4>
        <h4>
          <li>Chats(Amount of messages)</li>
        </h4>
        <h4>
          <li>Calls(Amount of calls)</li>
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
