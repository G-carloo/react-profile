import React from "react";
import rocket from "fontawesome";
import {
  InstagramOutlined,
  GithubFilled,
  CodepenCircleOutlined,
} from "@ant-design/icons";
import hackerrank from "fontawesome";

const Footer = () => {
  return (
    <div className='all-center'>
      <InstagramOutlined />
      <GithubFilled />
      <CodepenCircleOutlined />
      <rocket />
    </div>
  );
};

export default Footer;
