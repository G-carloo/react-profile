import React from "react";
import Rocket from "fontawesome";
import {
  InstagramOutlined,
  GithubFilled,
  CodepenCircleOutlined,
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
      <Rocket />
    </div>
  );
};

export default Footer;
