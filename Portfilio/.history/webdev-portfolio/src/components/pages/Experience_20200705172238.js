import React from "react";
import { Html5TwoTone } from "@ant-design/icons";
import { node, css3, python, js } from "fontawesome";
import html from "./fullstack.jpg";
import { html, css3, js } from "./html, css, js.jpg";
import es6 from "./es6.jpg";
import python from "./python.jpg";
import reactjs from "./reactjs.jpg";
import mongodb from "./mongodb.jpg";
import mysql from "./mysql.jpg";
import nodejs from "./nodejs.jpg";

const image = {};

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
        <img src={fullstack} alt='' style={image} />
        <img src={fullstack} alt='' style={image} />
        <img src={fullstack} alt='' style={image} />
        <img src={fullstack} alt='' style={image} />
        <img src={fullstack} alt='' style={image} />

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
