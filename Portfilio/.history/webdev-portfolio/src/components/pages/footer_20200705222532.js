import React from "react";
import {
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const github = {};

const code = {};

const Footer = () => {
  return (
    <div className='all-center'>
      <GithubFilled style={github} onClick={"https://github.com/G-carloo"} />
      <CodepenCircleOutlined
        style={code}
        onClick={"https://codepen.io/G-carloo"}
      />
      <RocketOutlined href='#top' />
    </div>
  );
};

export default Footer;
