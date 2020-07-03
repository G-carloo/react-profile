import React from "react";

const Landingpage = (props) => {
  return (
    <div className='Landing-Page'>
      <div className='text-center'>
        <h1>
          <img
            src='https://cdn.pixabay.com/photo/2017/01/20/11/50/landscape-1994685__340.jpg'
            style={{
              backgroundAttachment: "fixed",
              height: "100vh",
              width: "100vw",
              boxsizing: "border-box",
              opacity: "1",
              backgroundposition: "center",
            }}
          />
          HI, I'm Ganief
          <h6>Junior Web developer</h6>
        </h1>
      </div>
    </div>
  );
};

export default Landingpage;
