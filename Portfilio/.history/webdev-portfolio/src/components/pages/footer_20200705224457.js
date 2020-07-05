import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className='footer'>
      <GithubFilled
        style={github}
        href='https://github.com/G-carloo'
        onClick={"https://github.com/G-carloo"}
      />
      <CodepenCircleOutlined
        style={code}
        href='https://codepen.io/G-carloo'
        onClick={"https://codepen.io/G-carloo"}
      />
      <RocketOutlined href='#Top' onClick='#Top' />
    </div>
  );
};

export default Footer;
