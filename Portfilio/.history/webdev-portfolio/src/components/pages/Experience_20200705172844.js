import React from "react";
import { Html5TwoTone } from "@ant-design/icons";
import {} from "fontawesome";
import html from "./html, css, js.jpg";
import es6 from "./es6.jpg";
import python from "./python.jpg";
import reactjs from "./reactjs.jpg";
import mongodb from "./mongodb.jpg";
import mysql from "./mysql.jpg";
import nodejs from "./nodejs.jpg";

const html1 = {
  height: "50vh",
  width: "50vw",
};

const reactjs1 = {
  height: "50vh",
  width: "50vw",
};

const python1 = {
  height: "50vh",
  width: "50vw",
};
const mongodb1 = {
  height: "50vh",
  width: "50vw",
};
const nodejs1 = {
  height: "50vh",
  width: "50vw",
};
const mysql1 = {
  height: "50vh",
  width: "50vw",
};

const Experience = () => {
  return (
    <div className='text-center'>
      <div>
        <h2>Experience</h2>
        <h4 className='text-center'>
          <i>
            <strong>Some technologies I've worked with</strong>
          </i>
        </h4>
        <img src={html} alt='' style={} />
        <img src={es6} alt='' style={} />
        <img src={python} alt='' style={} />
        <img src={nodejs} alt='' style={} />
        <img src={mongodb} alt='' style={} />
        <img src={reactjs} alt='' style={} />
        <img src={mysql} alt='' style={} />

        <div>
          <Html5TwoTone />
          <css3 />
          <python />
          <js />
          <node />
        </div>

        <div>
          <button>
            <strong>
              <h3>
                <a href='#'>CHECK OUT MY RESUME</a>
              </h3>
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
