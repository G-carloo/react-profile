import React from "react";
import Sun from "./Sun.jpg";

const imgStyle = {
  width: "40vw",
  height: "500px",
  backgroundsize: "cover",
  backgroundAttachment: "initial",
  float: "left",
  padding: "80px",
  margin: "30",
};

const About = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2 id='About'>A LITTLE BIT ABOUT ME</h2>
        <img src={Sun} alt='' style={imgStyle} />
        <div className=''>
          <p className='text-center'>
            <strong>
              Hey! My name is Ganief Carloo and I'm a web developer with a
              passion for back end development and design. Looking for new ways
              of being creative along with solving problems. I have some
              experience in the work environment from volunteering and helping
              out at school functions etc.
            </strong>
          </p>
          <p className='text-center'>
            <strong>
              When I'm not looking at a screen I enjoy keeping fit, learning a
              new skill, networking/connecting
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
