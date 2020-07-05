import React from "react";
import { Html5TwoTone } from "@ant-design/icons";
import { Html5TwoTone } from "font-face";

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
        <div>
          <Html5TwoTone />
        </div>

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
