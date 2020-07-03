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
          I am a young developer who's looking for the next "big thing". I am
          eager to learn new things. I am a respectful, determined, dedicated,
          creative, hardworking, open minded, humble and adaptable young man. I
          tend to be too professional at times. If I set my mind on something I
          will stop until I achieve it, and I know that if I put my mind to
          something, I can do it. When I'm not looking at a screen I enjoy
          keeping fit, learning new things, networking/connecting
        </p>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
