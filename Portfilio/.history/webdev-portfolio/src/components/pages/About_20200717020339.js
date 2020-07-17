import React from "react";
import Sun from "./Sun.jpg";

const imgStyle = {
  width: "40vw",
  height: "500px",
  padding: "30px",
  margin: "10px",
};

const About = () => {
  return (
    <div>
      <div>
        <h2 id='About' className='text-center'>
          A LITTLE BIT ABOUT ME
        </h2>
        <div className='about'>
          <img src={Sun} alt='' style={imgStyle} />
          <div>
            <p className='ab'>
              <strong>
                Hey! My name is Ganief Carloo and I'm a web developer with a
                passion for back end development and design. Looking for new
                ways of being creative along with solving problems. I have some
                experience in the work environment from volunteering and helping
                out at school functions etc. I have done some job shadowing
                which is where I was introduced into front end development.
              </strong>
            </p>
            <p className='ab'>
              <strong>
                When I'm not looking at a screen I enjoy keeping fit, learning a
                new skill, networking or connecting
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
