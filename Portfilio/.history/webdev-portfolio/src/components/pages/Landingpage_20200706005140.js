import React from "react";
import { ArrowDownOutlined } from "@ant-design/icons";

const backgroundStyle = {
  backgroundImage: `url(${"https://media.istockphoto.com/photos/farlacombe-farm-midnight-july-2019-picture-id1165109078?b=1&k=6&m=1165109078&s=170667a&w=0&h=XWKye5DbCng1jwa-EbVRpuV5cOKGGrtuXwz_00VGhro="})`,
  height: "100vh",
  width: "98vw",
  backgroundattachment: "fixed",
  // backgroundposition: "center",
  // backgroundrepeat: "no-repeat",
  // backgroundsize: "cover",
};

const arrowStyle = {
  height: "300vh",
  width: "300vw",
};

const Landingpage = () => {
  return (
    <div id='Top'>
      <span>
        <div style={backgroundStyle}>
          <h1 className='text-center'>
            HI, I'm Ganief
            <h6>Web developer & UX Enthusiast</h6>
          </h1>
          <ArrowDownOutlined
            className='all-center'
            href='#About'
            style={arrowStyle}
          />
        </div>
      </span>
    </div>
  );
};

export default Landingpage;
