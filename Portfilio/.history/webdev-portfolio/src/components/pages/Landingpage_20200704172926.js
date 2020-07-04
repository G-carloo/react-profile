import React from "react";
import mountain from "./mountain.jpg";
import PropTypes from "prop-types";

const Landingpage = () => {
  return (
    <div>
      <div>
        <img
          className='Landing-Page'
          styles={{
            backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/01/20/11/50/landscape-1994685_960_720.jpg"})`,
          }}
        />
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
