import React from "react";
import PropTypes from "prop-types";
import {
  SearchOutlined,
  MoreOutlined,
  CameraOutlined,
  PaperClipOutlined,
  PhoneOutlined,
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
          <SearchOutlined onClick={Search} />

          <MoreOutlined onClick={More} />
        </ul>
      </ul>
      <ul className='ul'>
        <h3>
          <li>
            <CameraOutlined onClick={Cam} />
          </li>
        </h3>
        <h3>
          <li>
            <PaperClipOutlined onClick={Chats} />
          </li>
        </h3>
        <h3>
          <li>
            <PhoneOutlined onClick={Calls} />
          </li>
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
