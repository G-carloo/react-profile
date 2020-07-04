import React from "react";
// import PropTypes from "prop-types";
import Image from "https://cdn.pixabay.com/photo/2017/01/20/11/50/landscape-1994685__340.jpg";

const Landingpage = () => {
  return (
    <div className='Landing-Page'>
      <div>
        <img
          styles={{
            backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/01/20/11/50/landscape-1994685__340.jpg"})`,
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
