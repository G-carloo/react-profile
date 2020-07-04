import React from "react";
import { Html5TwoTone } from "@ant-design/icons";

const Experience = () => {
  return (
    <div className='text-center'>
      <div>
        <h2>Experience</h2>
        <h4 className='text-center'>
          <i>
            <strong>Some technologies I've worked with</strong>
          </i>
          <Html5TwoTone />
        </h4>

        <button>
          <strong>
            <h3>CHECK OUT MY RESUME</h3>
          </strong>
        </button>
      </div>
    </div>
  );
};

export default Experience;
