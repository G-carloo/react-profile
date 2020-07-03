import React from "react";
import PropTypes from "prop-types";
import stars from "../page/stars";

const Landingpage = (props) => {
  const stars = Image();

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
