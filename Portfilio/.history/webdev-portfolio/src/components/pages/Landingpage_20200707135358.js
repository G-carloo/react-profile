import React from "react";

const backgroundStyle = {
  backgroundImage: `url(${"https://media.istockphoto.com/photos/farlacombe-farm-midnight-july-2019-picture-id1165109078?b=1&k=6&m=1165109078&s=170667a&w=0&h=XWKye5DbCng1jwa-EbVRpuV5cOKGGrtuXwz_00VGhro="})`,
  height: "100vh",
  width: "100%",
  backgroundattachment: "fixed",
  // backgroundposition: "center",
  backgroundrepeat: "no-repeat",
  backgroundsize: "cover",
  boxsizing: "border-box",
  opacity: "1",
};

const main = {
  padding: "00px",
  textalign: "right",
  margin: "500px",
  textdecorationcolor: "#DC143C",
};

const Landingpage = () => {
  return (
    <div id='Top'>
      <div style={backgroundStyle}>
        <h1 className='main' style={main}>
          HI, I'm Ganief
          <h6>Web developer & UX Enthusiast</h6>
        </h1>
      </div>
    </div>
  );
};

export default Landingpage;
