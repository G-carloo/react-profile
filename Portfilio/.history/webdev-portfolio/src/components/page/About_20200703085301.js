import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>A LITTLE BIT ABOUT ME</h2>
        <img
          src='/Sun.jpg'
          style={{
            borderradius: "50%",
            height: "200px",
            width: "250px",
          }}
        />
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
