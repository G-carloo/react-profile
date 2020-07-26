import React from "react";
import "bootstrap";
import Junaid from "./Junaid S.jpg";
import Michael from "./Michael b.jpg";
import Philani from "./Philani.jpg";
import Jason from "./Jason.jpg";

const test = {
  margin: "100",
  padding: "50",
  textalign: "center",
};

const Wandrag = {
  padding: "250px",
  margin: "50px",
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
    <div
      id='carouselExampleIndicators'
      class='carousel slide slides'
      data-ride='carousel'
    >
      <ol class='carousel-indicators'>
        <li data-target='#Jason' data-slide-to='0' class='active'>
          {" "}
        </li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'>
          {" "}
        </li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'>
          {" "}
        </li>
        <li data-target='#carouselExampleIndicators' data-slide-to='3'>
          {" "}
        </li>
        <li data-target='#carouselExampleIndicators' data-slide-to='4'>
          {" "}
        </li>
      </ol>
      <div class='carousel-inner'>
        <div class='carousel-item active'>
          <img class='d-block w-100' src={Jason} alt='' style={Wandrag} />
        </div>
        <div class='carousel-item'>
          <img
            class='d-block w-100'
            src={Philani}
            alt='Second slide'
            style={Isithembiso}
          />
        </div>
        <div class='carousel-item'>
          <img
            class='d-block w-100'
            src={Junaid}
            alt='Third slide'
            style={Salie}
          />
        </div>
        <div class='carousel-item'>
          <img
            class='d-block w-100'
            src={Michael}
            alt='Fourth slide'
            style={Bruwer}
          />
        </div>
        <div class='carousel-item'>
          <img
            class='d-block w-100'
            src='...'
            alt='Fifth slide'
            style={Baron}
          />
        </div>
      </div>
      <a
        class='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='false'>
          {" "}
        </span>
        <span class='sr-only'>Previous </span>
      </a>
      <a
        class='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='false'>
          {" "}
        </span>
        <span class='sr-only'>Next </span>
      </a>
    </div>
  );
};

export default Work;
