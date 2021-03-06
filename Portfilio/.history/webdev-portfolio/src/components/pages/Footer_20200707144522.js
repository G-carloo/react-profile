import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const footer = {
  backgroundcolor: "black",
};

const Footer = () => {
  return (
    <div className='text-center' style={footer}>
      <a href='https://github.com/G-carloo'>
        <GithubFilled />
      </a>
      <a href='https://codepen.io/G-carloo'>
        <CodepenCircleOutlined />
      </a>
      {/* <RocketOutlined /> */}
    </div>
  );
};

export default Footer;
