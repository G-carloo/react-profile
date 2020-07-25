import React from "react";
import {
  LaptopOutlined,
  BookOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const Passion = () => {
  return (
    <div className='text-center'>
      <h2 id='Passion' className='text-center'>
        My interests are
      </h2>
      <div className='sub'>
        <h4 className='sub s1'>
          <LaptopOutlined />
          <strong>
            <i>Design</i>
          </strong>
        </h4>
        <h4 className='sub s2'>
          <LineChartOutlined />
          <strong>
            <i>Problem Solving</i>
          </strong>
        </h4>
      </div>

      <div className='work'>
        <p className='sub s1'>
          <strong>
            Design is a big part of any product, software or hardware. It
            encompasses the functionality as well as the user experience. I
            strive to design user interfaces and experiences that would be
            revolutionary.
          </strong>
        </p>

        <p className='sub s2'>
          <strong>
            Problem Solving is part of who I am. Growing up I loved to solving
            problems, it brought me a sense of accommplishment. The development
            world has many problems and I hope to help solve them.
          </strong>
        </p>
        <div className='sub s3'>
          <h4>
            <BookOutlined />
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

export default Passion;
