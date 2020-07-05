import React from "react";
import rocket from "fontawesome";
import {
  InstagramOutlined,
  GithubFilled,
  CodepenCircleOutlined,
} from "@ant-design/icons";
import hackerrank from "fontawesome";

const footer = () => {
  return (
    <div>
      <InstagramOutlined />
      <GithubFilled />
      <CodepenCircleOutlined />
      <hackerrank />
      <rocket />
    </div>
  );
};

export default footer;
