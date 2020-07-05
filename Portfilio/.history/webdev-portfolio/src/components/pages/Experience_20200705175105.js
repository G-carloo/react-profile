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
  float: "right",
};
const es61 = {
  height: "50vh",
  width: "50vw",
  float: "left",
};

const reactjs1 = {
  height: "50vh",
  width: "50vw",
  float: "right",
};

const python1 = {
  height: "50vh",
  width: "50vw",
  float: "left",
};
const mongodb1 = {
  height: "50vh",
  width: "50vw",
  float: "right",
};
const nodejs1 = {
  height: "50vh",
  width: "50vw",
  float: "left",
};
const mysql1 = {
  height: "50vh",
  width: "50vw",
  float: "right",
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
        <img src={html} alt='' style={html1} />{" "}
        <img src={es6} alt='' style={es61} />
        <img src={reactjs} alt='' style={reactjs1} />
        <img src={python} alt='' style={python1} />
        <img src={nodejs} alt='' style={nodejs1} />
        <img src={mongodb} alt='' style={mongodb1} />
        <img src={mysql} alt='' style={mysql1} />
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
