import React from "react";
import {
  MoreOutlined,
  CameraOutlined,
  PaperClipOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const sp = {
  display: "inline-flex",
  color: "black",
  justifycontent: "right",
  height: "50px",
  float: "right",
  textalign: "center",
  position: "relative",
};

const More = () => {
  return <a href='#modal'>This should show a modal</a>;
};
const Cam = () => {
  return <a href='#Cam'>This should ask to upload something</a>;
};
const Chats = () => {
  return <a href='#Chats'>This should show Chats</a>;
};
const Calls = () => {
  return <a href='#Calls'>This should show</a>;
};

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='h1'>Simple Messaging</h1>
        <span>
          <ul className='sp' style={sp}>
            <form class='form-inline'>
              <input
                class='form-control bg'
                type='search'
                placeholder='Search'
              />
              <button class='btn ' type='submit'>
                Search
              </button>
            </form>
            <h2>
              <MoreOutlined onClick={More} />
            </h2>
          </ul>
        </span>
      </ul>
      <ul className='ul'>
        <h2>
          <li>
            <a href='#Cam'>
              <strong>
                <CameraOutlined onClick={Cam} href='#Cam' />
              </strong>
            </a>
          </li>
        </h2>
        <h2>
          <li>
            <a href='#Chats'>
              <strong>
                <PaperClipOutlined onClick={Chats} href='#Messages' />
              </strong>
            </a>
          </li>
        </h2>
        <h2>
          <li>
            <PhoneOutlined onClick={Calls} href='#Calls' />
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
