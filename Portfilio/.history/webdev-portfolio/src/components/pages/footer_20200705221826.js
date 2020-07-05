import React from "react";
import {
  InstagramOutlined,
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const github = {};
const ongit = {};

const code = {};
const oncode = {};

const Footer = () => {
  return (
    <div className='all-center'>
      <GithubFilled style={github} onClick={} />
      <CodepenCircleOutlined style={code} onClick={} />
      <RocketOutlined href='#backtotop' />
    </div>
  );
};

export default Footer;
