import React from "react";
import html from "./html, css, js.jpg";
import es6 from "./es6.jpg";
import python from "./python.jpg";
import reactjs from "./reactjs.jpg";
import mongodb from "./mongodb.jpg";
import mysql from "./mysql.jpg";
import nodejs from "./nodejs.jpg";
import CV from "./CV_MOEGAMAT GANIEF CARLOO.pdf";

const backgroundStyle = {
  backgroundImage: `url(${"https://media.istockphoto.com/photos/deep-space-background-picture-id178149253?b=1&k=6&m=178149253&s=170667a&w=0&h=bBtMB-lw6-K18UX4SwNB4UFxS8omvLVFuE5ABRh5xnI="})`,
  height: "40vh",
  width: "300px",
  backgroundattachment: "fixed",
  backgroundposition: "center",
  backgroundrepeat: "no-repeat",
};

const html1 = {
  height: "50vh",
  width: "25vw",
  float: "right",
};

const es61 = {
  height: "23vh",
  width: "23vw",
  float: "left",
};

const reactjs1 = {
  height: "23vh",
  width: "23vw",
  float: "center",
};

const python1 = {
  height: "25vh",
  width: "25vw",
  float: "left",
};

const nodejs1 = {
  height: "20vh",
  width: "20vw",
  float: "center",
};

const mongodb1 = {
  height: "25vh",
  width: "25vw",
  float: "center",
};

const mysql1 = {
  height: "20vh",
  width: "20vw",
  float: "right",
};

const btnStyles = {
  float: "center",
  padding: "10px",
  margin: "100px",
};

const Experience = () => {
  return (
    <div className='text-center'>
      <div>
        <h2 id='Experience'>Experience</h2>
        <h4 className='text-center'>
          <i>
            <strong>Some technologies I've worked with</strong>
          </i>
        </h4>
        <div>
          <img src={html} alt='' style={html1} />{" "}
          <img src={es6} alt='' style={es61} />
          <img src={reactjs} alt='' style={reactjs1} />
          <img src={python} alt='' style={python1} />
          <img src={nodejs} alt='' style={nodejs1} />
          <img src={mysql} alt='' style={mysql1} />
          <img src={mongodb} alt='' style={mongodb1} />
        </div>
        <span>
          <div style={backgroundStyle}>
            <button style={btnStyles}>
              <strong>
                <h3>
                  <a href='CV_MOEGAMAT GANIEF CARLOO.pdf' download>
                    CHECK OUT MY RESUME
                  </a>
                </h3>
              </strong>
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Experience;
