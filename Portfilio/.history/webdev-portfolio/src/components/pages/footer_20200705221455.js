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
      <InstagramOutlined style={insta} />
      <GithubFilled style={github} />
      <CodepenCircleOutlined style={code} />
      <RocketOutlined href='#backtotop' />
    </div>
  );
};

export default Footer;
