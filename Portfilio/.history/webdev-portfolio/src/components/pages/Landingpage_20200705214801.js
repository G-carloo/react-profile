import React from "react";
import { ArrowDownOutlined } from "@ant-design/icons";

const backgroundStyle = {
  backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/08/08/00/33/nature-2609647__340.jpg"})`,
  height: "50vh",
  maxwidth: "100vw",
  backgroundattachment: "fixed",
  backgroundposition: "center",
  backgroundrepeat: "no-repeat",
  backgroundsize: "cover",
};

const arrowStyle = {
  height: "30vh",
  width: "30vw",
};

const Landingpage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Landingpage;
