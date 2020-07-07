import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const footer = {
  backgroundcolor: "black",
};

const icon = {
  margin: "50px",
  padding: "100px",
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
      {/* <RocketOutlined /> */}
    </div>
  );
};

export default Footer;
