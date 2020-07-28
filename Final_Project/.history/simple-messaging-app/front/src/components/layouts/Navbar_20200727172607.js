import React from "react";
import { Link } from "react-router-dom";
import {
  CaretUpOutlined,
  MoreOutlined,
  CloudUploadOutlined,
  PaperClipOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

const sp = {
  display: "inline-flex",
  color: "black",
  justifycontent: "right",
  height: "50px",
  float: "right",
  textalign: "center",
  position: "relative",
};

const Navbar = ({ icon }) => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='main'>
          <i className={icon} />
          Simple Messaging
        </h1>
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
        <Link to='/Moreinfo'>
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

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  icon: "fas fa-id-card-alt",
};

export default Navbar;
