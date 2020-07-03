import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>A LITTLE BIT ABOUT ME</h2>
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
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
