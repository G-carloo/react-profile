import React from "react";
import {
  LaptopOutlined,
  BookOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const Passion = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2 id='Passion' className='text-center'>
          My interests are
        </h2>
        <div className='flex'>
          <LaptopOutlined />
          <h4>
            <strong>
              <i>Design</i>
            </strong>
          </h4>
          <p>
            <strong>
              Design is a big part of any product, software or hardware. It
              encompasses the functionality as well as the user experience. I
              strive to design user interfaces and experiences that would be
              revolutionary.
            </strong>
          </p>
          <LineChartOutlined />
          <h4>
            <strong>
              <i>Problem Solving</i>
            </strong>
          </h4>
          <p>
            <strong>
              Problem Solving is part of who I am. Growing up I loved to solving
              problems, it brought me a sense of accommplishment. The
              development world has many problems and I hope to help solve them.
            </strong>
          </p>
          <BookOutlined />
          <h4>
            <strong>
              <i>Development</i>
            </strong>
          </h4>
          <p>
            <strong>
              I love learning new things and with that many processes and
              developments. I find development interesting mostly because
              everytime you redo or look at something from a different angle you
              tend to notice things you never saw before. And widens your
              perspective on everythings else.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

Passion.propTypes = {};

export default Passion;
