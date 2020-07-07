import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  HeartFilled,
} from "@ant-design/icons";

const footer = {
  backgroundcolor: "bg-dark",
};

const icon = {
  margin: "50px",
  padding: "5px",
  color: "blue",
};

const Footer = () => {
  return (
    <div className='text-center' style={footer}>
      <a href='https://github.com/G-carloo'>
        <GithubFilled style={icon} />
      </a>
      <a href='https://codepen.io/G-carloo'>
        <CodepenCircleOutlined style={icon} />
      </a>
      <h4>Made by Ganief Carloo</h4>
      <h4 className='heart'>
        <HeartFilled />
      </h4>
    </div>
  );
};

export default Footer;
