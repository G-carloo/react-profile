import React from "react";
import { Link } from "react-router-dom";
import {
  MoreOutlined,
  CloudUploadOutlined,
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
        <h1 className='main'>Simple Messaging</h1>
      </ul>
      <ul className='ul'>
        <h2>
          <Link to='/Upload'>
            <CloudUploadOutlined href='#Up' />
          </Link>
        </h2>
        <h2>
          <Link to='/Messages'>
            <PaperClipOutlined href='#Messages' />
          </Link>
        </h2>
        <h2>
          <Link to='/Calls'>
            <PhoneOutlined href='#Calls' />
          </Link>
        </h2>
      </ul>
      <h2>
        <Link to='./pages/More'>
          <MoreOutlined href='#Modal' />
        </Link>
      </h2>
      <ul className='sp' style={sp}>
        <form class='form-inline'>
          <input class='form-control bg' type='search' placeholder='Search' />
          <button class='btn ' type='submit'>
            Search
          </button>
        </form>
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
