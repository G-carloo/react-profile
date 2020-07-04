import React from "react";
// import mountain from "./mountain.jpg";
import { ArrowDownOutlined } from "@ant-design/icons";

const backgroundStyle = {
  backgroundImage: `url(${"https://cdn.pixabay.com/photo/2019/09/05/11/01/twilight-4453762__340.jpg"})`,
  height: "100vh",
  width: "100vw",
  backgroundattachment: "fixed",
  backgroundposition: "center",
  backgroundrepeat: "no-repeat",
  backgroundsize: "cover",
  boxsizing: "border-box",
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
