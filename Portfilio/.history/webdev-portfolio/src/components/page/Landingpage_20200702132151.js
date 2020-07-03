import React from "react";
import PropTypes from "prop-types";

const Landingpage = (props) => {
  return (
    <div>
      <img src='stars.jpg' />
    </div>
  );
};

Landingpage.propTypes = {
  stars: PropTypes.img,
};

export default Landingpage;
