import React from "react";
import PropTypes from "prop-types";

const Landingpage = ({ icon }) => {
  return (
    <div className='Landing-Page'>
      <div>
        <img
          src='https://cdn.pixabay.com/photo/2017/01/20/11/50/landscape-1994685__340.jpg'
          style={{
            backgroundAttachment: "fixed",
            height: "100vh",
            width: "100vw",
            boxsizing: "border-box",
            opacity: "1",
            backgroundposition: "center",
            backgroundsize: "cover",
          }}
        />
        <h1>
          HI, I'm Ganief
          <h6>Web developer & UX Enthusiast</h6>
        </h1>
        <br />
      </div>
    </div>
  );
};

export default Landingpage;
