import React from "react";
import mountain from "./mountain.jpg";

const Landingpage = () => {
  return (
    <div className='Landing-Page'>
      <div>
        <img
          styles={{
            backgroundImage: `url(${mountain})`,
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
