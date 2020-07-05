import React from "react";
import rocket from "fontawesome";
import {
  InstagramOutlined,
  GithubFilled,
  CodepenCircleOutlined,
} from "@ant-design/icons";
import hackerrank from "fontawesome";

const insta = {};

const github = {};

const code = {};

const Footer = () => {
  return (
    <div className='all-center'>
      <InstagramOutlined style={insta} />
      <GithubFilled style={github} />
      <CodepenCircleOutlined style={code} />
      <rocket />
    </div>
  );
};

export default Footer;
