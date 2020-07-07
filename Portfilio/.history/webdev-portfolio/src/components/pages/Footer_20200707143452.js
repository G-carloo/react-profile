import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className='text-center'>
      <GithubFilled
        href='https://github.com/G-carloo'
        onClick={"https://github.com/G-carloo"}
      />
      <CodepenCircleOutlined
        href='https://codepen.io/G-carloo'
        onClick={"https://codepen.io/G-carloo"}
      />
      {/* <RocketOutlined /> */}
    </div>
  );
};

export default Footer;
