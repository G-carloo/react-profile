import React from "react";
import PropTypes from "prop-types";

const Passion = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>What I do</h2>
        <br />
        <h3>
          <i>Design</i>
        </h3>
        <p>
          Design is a big part of any product, software or hardware. It
          encompasses the functionality as well as the user experience. I strive
          to design user interfaces and experiences that would be revolutionary.
        </p>
        <br />
        <h3>
          <i>Problem Solving</i>
        </h3>
        <p>
          Problem Solving is part of who I am. Growing up I loved to solving
          problems, it brought me a sense of accommplishment. The development
          world has many problems and I hope to help solve them.
        </p>
        <br />
        <h3>
          <i>Development</i>
        </h3>
        <p></p>
      </div>
      <br />
    </div>
  );
};

Passion.propTypes = {};

export default Passion;
