import React from "react";
import "bootstrap";
import Junaid from "./Junaid S.jpg";
import Michael from "./Michael b.jpg";
import Philani from "./Philani.jpg";
import Jason from "./Jason.jpg";

const Wandrag = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minwidth: "100%",
  height: "40rem",
  margin: "0 auto",
};

const Isithembiso = {
  padding: "100px",
  margin: "50px",
};
const Salie = {
  padding: "250px",
  margin: "50px",
};
const Bruwer = {
  padding: "250px",
  margin: "50px",
};
const Baron = {};

const Work = () => {
  return (
    <div className='owl-carousel owl-theme'></div>
    // <div
    //   id='carouselExampleIndicators'
    //   className='carousel slide slides'
    //   data-ride='carousel'
    // >
    //   <ol className='carousel-indicators'>
    //     <li data-target='#Jason' data-slide-to='0' className='active'>
    //       {" "}
    //     </li>
    //     <li data-target='#carouselExampleIndicators' data-slide-to='1'>
    //       {" "}
    //     </li>
    //     <li data-target='#carouselExampleIndicators' data-slide-to='2'>
    //       {" "}
    //     </li>
    //     <li data-target='#carouselExampleIndicators' data-slide-to='3'>
    //       {" "}
    //     </li>
    //     <li data-target='#carouselExampleIndicators' data-slide-to='4'>
    //       {" "}
    //     </li>
    //   </ol>
    //   <div className='carousel-inner'>
    //     <div className='carousel-item active'>
    //       <img className='d-block w-100' src={Jason} alt='' style={Wandrag} />
    //     </div>
    //     <div className='carousel-item'>
    //       <img
    //         className='d-block w-100'
    //         src={Philani}
    //         alt='Second slide'
    //         style={Isithembiso}
    //       />
    //     </div>
    //     <div className='carousel-item'>
    //       <img
    //         className='d-block w-100'
    //         src={Junaid}
    //         alt='Third slide'
    //         style={Salie}
    //       />
    //     </div>
    //     <div className='carousel-item'>
    //       <img
    //         className='d-block w-100'
    //         src={Michael}
    //         alt='Fourth slide'
    //         style={Bruwer}
    //       />
    //     </div>
    //     <div className='carousel-item'>
    //       <img
    //         class='d-block w-100'
    //         src='...'
    //         alt='Fifth slide'
    //         style={Baron}
    //       />
    //     </div>
    //   </div>
    //   <a
    //     className='carousel-control-prev'
    //     href='#carouselExampleIndicators'
    //     role='button'
    //     data-slide='prev'
    //   >
    //     <span className='carousel-control-prev-icon' aria-hidden='false'>
    //       {" "}
    //     </span>
    //     <span className='sr-only'>Previous </span>
    //   </a>
    //   <a
    //     className='carousel-control-next'
    //     href='#carouselExampleIndicators'
    //     role='button'
    //     data-slide='next'
    //   >
    //     <span className='carousel-control-next-icon' aria-hidden='false'>
    //       {" "}
    //     </span>
    //     <span className='sr-only'>Next </span>
    //   </a>
    // </div>
  );
};

export default Work;
