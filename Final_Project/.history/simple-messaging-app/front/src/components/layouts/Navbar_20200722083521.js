import React from "react";
import PropTypes from "prop-types";
import {
  SearchOutlined,
  MoreOutlined,
  CameraOutlined,
  PaperClipOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Camera from "./Camera";

const Search = () => {
  return <a href='#' />;
};
const More = () => {
  return <a href='#' />;
};
const Cam = () => {
  return (
    <div>
      <a href='#Cam' />
      <Camera />
    </div>
  );
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
        <span>
          <ul className='sp'>
            <h2>
              <SearchOutlined onClick={Search} />
            </h2>
            <h2>
              <MoreOutlined onClick={More} />
            </h2>
          </ul>
        </span>
      </ul>
      <ul className='ul'>
        <h2>
          <li>
            <CameraOutlined onClick={Cam} />
          </li>
        </h2>
        <h2>
          <li>
            <PaperClipOutlined onClick={Chats} />
          </li>
        </h2>
        <h2>
          <li>
            <PhoneOutlined onClick={Calls} />
          </li>
        </h2>
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
