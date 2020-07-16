import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  HeartFilled,
} from "@ant-design/icons";

const icon = {
  margin: "25px",
  padding: "5px",
  color: "blue",
  height: "10px",
};

const Footer = () => {
  return (
    <div className='text-center footer'>
      <a href='https://github.com/G-carloo'>
        <GithubFilled style={icon} />
      </a>
      <a href='https://codepen.io/G-carloo'>
        <CodepenCircleOutlined style={icon} />
      </a>
      <h5 className='main'>Ganief Carloo 2020</h5>
      <h4 className='heart'>
        <HeartFilled />
        <HeartFilled />
        <HeartFilled />
      </h4>
    </div>
  );
};

export default Footer;
