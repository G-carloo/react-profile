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
    <div>
      <InstagramOutlined />
      <GithubFilled />
      <CodepenCircleOutlined />
      <hackerrank hred="#/>
      <rocket />
    </div>
  );
};

export default Footer;
