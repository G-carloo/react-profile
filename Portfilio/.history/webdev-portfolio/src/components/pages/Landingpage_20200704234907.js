import React from "react";
import mountain from "./mountain.jpg";

const backgroundStyle = {
  backgroundImage: `url(${mountain})`,
};

const Landingpage = () => {
  return (
    <div>
      <div style={backgroundStyle}>
        <h1 className='text-center'>
          HI, I'm Ganief
          <h6>Web developer & UX Enthusiast</h6>
        </h1>
      </div>
    </div>
  );
};

export default Landingpage;
