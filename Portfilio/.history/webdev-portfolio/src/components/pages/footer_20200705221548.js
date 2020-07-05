import React from "react";
import {
  InstagramOutlined,
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const insta = {};

const github = {};

const code = {};

const Footer = () => {
  return (
    <div className='all-center'>
      <InstagramOutlined style={insta} onClick={} />
      <GithubFilled style={github} onClick={} />
      <CodepenCircleOutlined style={code} onClick={} />
      <RocketOutlined href='#backtotop' />
    </div>
  );
};

export default Footer;
