import React from "react";
import PropTypes from "prop-types";

const Passion = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>What I do</h2>
        <br />
        <h4>
          <strong>
            <i>Design</i>
          </strong>
        </h4>
        <p>
          Design is a big part of any product, software or hardware. It
          encompasses the functionality as well as the user experience. I strive
          to design user interfaces and experiences that would be revolutionary.
        </p>
        <br />
        <h4>
          <i>Problem Solving</i>
        </h4>
        <p>
          Problem Solving is part of who I am. Growing up I loved to solving
          problems, it brought me a sense of accommplishment. The development
          world has many problems and I hope to help solve them.
        </p>
        <br />
        <h4>
          <i>Development</i>
        </h4>
        <p>
          I love learning new things and with that many processes and
          developments. I find development interesting mostly because everytime
          you redo or look at something from a different angle you tend to
          notice things you never saw before. And widens your perspective on
          everythings else.
        </p>
      </div>
      <br />
    </div>
  );
};

Passion.propTypes = {};

export default Passion;
