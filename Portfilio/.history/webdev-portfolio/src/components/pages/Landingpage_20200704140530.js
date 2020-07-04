import React, { Image } from "react";
// import PropTypes from "prop-types";
import Image from "";

const Landingpage = () => {
  return (
    <div className='Landing-Page'>
      <div>
        <img styles={{ backgroundImage: `url(${Sun})` }} />
        <h1 className='text-center'>
          HI, I'm Ganief
          <h6>Web developer & UX Enthusiast</h6>
        </h1>
        <br />
      </div>
    </div>
  );
};

export default Landingpage;
