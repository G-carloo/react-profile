import React from "react";
import { Html5TwoTone } from "@ant-design/icons";
import { node, css3, python, js } from "fontawesome";
import fullstack from "./fullstack.jpg";

const image = {
  src: URL(),
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
        <div style={image}>
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
