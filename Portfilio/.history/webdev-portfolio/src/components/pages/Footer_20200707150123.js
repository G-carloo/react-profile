import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const footer = {
  backgroundcolor: "black",
  color: "",
};

const icon = {
  margin: "50px",
  padding: "5px",
};

const Footer = () => {
  return (
    <div className='text-center' style={footer}>
      <a href='https://github.com/G-carloo'>
        <GithubFilled style={icon} />
      </a>
      <RocketOutlined style={icon} />
      <a href='https://codepen.io/G-carloo'>
        <CodepenCircleOutlined style={icon} />
      </a>
    </div>
  );
};

export default Footer;
