import React from "react";
import { Link } from "react-router-dom";
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

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='h1'>Simple Messaging</h1>
        <ul className='sp' style={sp}>
          <form class='form-inline'>
            <input class='form-control bg' type='search' placeholder='Search' />
            <button class='btn ' type='submit'>
              Search
            </button>
          </form>
          <h2>
            <MoreOutlined />
          </h2>
        </ul>
      </ul>
      <ul className='ul'>
        <h3>
          <li>
            <Link to='/Upload'>
              <CameraOutlined href='#Up' />
            </Link>
          </li>
        </h3>
        <h2>
          <li>
            <Link to='/Messages'>
              <PaperClipOutlined href='#Messages' />
            </Link>
          </li>
        </h2>
        <h2>
          <li>
            <Link to='/Calls'>
              <PhoneOutlined href='#Calls' />
            </Link>
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
