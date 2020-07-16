import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  HeartFilled,
} from "@ant-design/icons";

const icon = {
  margin: "0px",
  padding: "px",
  color: "white",
  fontsize: "xx-large",
};

const Footer = () => {
  return (
    <div className='text-center footer'>
      <div className=''>
        <h4>
          <a href='https://github.com/G-carloo'>
            <GithubFilled style={icon} />
          </a>
        </h4>
        <h4>
          <a href='https://codepen.io/G-carloo'>
            <CodepenCircleOutlined style={icon} />
          </a>
        </h4>
      </div>
      <h4 className='main'>Ganief Carloo 2020</h4>
      <h4 className='heart'>
        <HeartFilled />
        <HeartFilled />
        <HeartFilled />
      </h4>
    </div>
  );
};

export default Footer;
