import React from "react";
import PropTypes from "prop-types";
import upoutlined from "@ant-design/icons";

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar'>
      <h1>
        <i className={icon} /> {title}Simple Messaging
      </h1>
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
