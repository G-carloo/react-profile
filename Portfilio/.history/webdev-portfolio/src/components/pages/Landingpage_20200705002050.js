import React from "react";
import mountain from "./mountain.jpg";
import { ArrowDownOutlined } from "@ant-design/icons";

const backgroundStyle = {
  backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/01/20/11/50/landscape-1994685_960_720.jpg"})`,
  height: "100vh",
  backgroundattachment: "fixed",
  backgroundposition: "center",
  backgroundrepeat: "no-repeat",
  backgroundposition: "center",
};

const Landingpage = () => {
  return (
    <div>
      <div style={backgroundStyle}>
        <h1 className='text-center'>
          HI, I'm Ganief
          <h6>Web developer & UX Enthusiast</h6>
        </h1>
        <ArrowDownOutlined className='all-center' />
      </div>
    </div>
  );
};

export default Landingpage;
