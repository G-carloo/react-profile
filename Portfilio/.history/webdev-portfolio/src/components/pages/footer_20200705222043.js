import React from "react";
import {
  InstagramOutlined,
  GithubFilled,
  CodepenCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const github = {};
const ongit = {
    url: 'https://github.com/G-carloo'
};

const code = {};
const oncode = {'https://codepen.io/G-carloo'};

const Footer = () => {
  return (
    <div className='all-center'>
      <GithubFilled style={github} onClick={ongit} />
      <CodepenCircleOutlined style={code} onClick={oncode} />
      <RocketOutlined href='#backtotop' />
    </div>
  );
};

export default Footer;
