import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>A LITTLE BIT ABOUT ME</h2>
        <img
          src='/Sun.jpg/'
          style={{
            borderradius: "50%",
            height: "200px",
            width: "250px",
          }}
        />
        <p>
          Hey! My name is Ganief Carloo and I'm a web developer with a passion
          for back end development
        </p>
        <br />
        <p>
          When I'm not looking at a screen I enjoy keeping fit, learning new
          things, networking/connecting
        </p>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
