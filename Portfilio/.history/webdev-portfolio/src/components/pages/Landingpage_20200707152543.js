import React from "react";

const backgroundStyle = {
  backgroundImage: `url(${"https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667__340.jpg"})`,
  height: "100vh",
  width: "100%",
  backgroundsize: "cover",
};

const Landingpage = () => {
  return (
    <div id='Top'>
      <div style={backgroundStyle} className='text-center'>
        <h1 className='main'>
          HI, I'm Ganief
          <h6>Web developer & UX Enthusiast</h6>
        </h1>
      </div>
    </div>
  );
};

export default Landingpage;
