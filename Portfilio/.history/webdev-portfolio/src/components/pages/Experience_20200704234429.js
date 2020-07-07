import React from "react";
import { Html5TwoTone } from "@ant-design/icons";
import { Python } from "@fontawesome";

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

        <Html5TwoTone />
        <Python />

        <div>
          <button>
            <strong>
              <h3>CHECK OUT MY RESUME</h3>
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;