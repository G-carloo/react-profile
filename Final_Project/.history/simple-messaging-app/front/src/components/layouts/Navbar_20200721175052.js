import React from "react";
import PropTypes from "prop-types";
import outlinedbullseye from "antde";

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Simple Messaging",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
