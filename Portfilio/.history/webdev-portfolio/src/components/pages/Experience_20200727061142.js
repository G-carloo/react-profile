import React from "react";
import html from "./html, css, js.jpg";
import es6 from "./es6.jpg";
import python from "./python.jpg";
import reactjs from "./reactjs.jpg";
import mongodb from "./mongodb.jpg";
import mysql from "./mysql.jpg";
import nodejs from "./nodejs.jpg";

const backgroundStyle = {
  backgroundImage: `url(${"https://cdn.pixabay.com/photo/2016/11/21/12/39/cosmos-1845140__340.jpg"})`,
  height: "40vh",
  width: "100%",
};

const html1 = {
  width: "auto",
  maxwidth: "100%",
  height: "auto",
  padding: "10px",
};

const es61 = {
  // display: "inline-flex",
  // margin: "10px",
};

const reactjs1 = {
  // display: "inline-flex",
  // margin: "10px",
};

const python1 = {
  // display: "inline-flex",
  // margin: "10px",
};

const nodejs1 = {
  // display: "inline-flex",
  // margin: "10px",
};

const mysql1 = {
  // display: "inline-flex",
  // margin: "10px",
};

const mongodb1 = {
  // display: "inline-flex",
  // margin: "10px",
};
const btnStyles = {
  backgrounfcolor: "black",
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
        <div className='flex'>
          <img src={html} alt='' style={html1} />{" "}
          <img src={es6} alt='' style={es61} />
          <img src={reactjs} alt='' style={reactjs1} />
          <img src={python} alt='' style={python1} />
          <img src={nodejs} alt='' style={nodejs1} />
          <img src={mongodb} alt='' style={mongodb1} />
          <img src={mysql} alt='' style={mysql1} />
        </div>
        <span>
          <div style={backgroundStyle} className='ex'>
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
