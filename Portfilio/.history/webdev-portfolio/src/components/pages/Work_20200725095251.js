import React from "react";
import Junaid from "./Junaid S.jpg";
import Michael from "./Michael b.jpg";
import Philani from "./Philani.jpg";
import Jason from "./Jason.jpg";

const test = {
  margin: "100",
  padding: "50",
  textalign: "center",
};

const Wandrag = () => {};
const Isithembiso = () => {};
const Salie = () => {};
const Bruwer = () => {};

const Work = () => {
  return (
    <div>
      <h2 id='Work' style={test} className='text-center'>
        Testimonials
      </h2>
      <div id='carouselIndicators' class='carousel slide' data-ride='carousel'>
        <div class='carouselIndicators'>
          <div class='carouselIndicators active'>
            <img class='d-block w-100' src={Jason} alt='...' />
            <div class='carousel-caption d-none d-md-block'>
              <h5>Jason Wandrag</h5>
              <p>
                "Ganief is a hardworking and curious individual, who shows a
                dedication and passion towards coding, as well as a strong
                desire to learn and progress"
              </p>
            </div>
          </div>
          <div class='carouselIndicators'>
            <img
              class='d-block w-100'
              src='...'
              alt=" Ganief's hard work and determination to work in an industry he
                had no prior knowledge in always amazes me. He's eagerness to
                learn and help others is what inspires me the most! - Josh
                Baron"
            />
          </div>
          <div class='carouselIndicators'>
            <img
              class='d-block w-100'
              src={Philani}
              alt=' Ganief is a passion-driven team player whos well organized. He
                learns a lot from his mistakes and never does them again. -
                Philani Sithembiso Ndhlela
              '
            />
          </div>
          <div class='carouselIndicators'>
            <img
              class='d-block w-100'
              src={Junaid}
              alt=" He's consistency shows that he is dedicated to his work -
                Moghamed Junaid Salie"
            />
          </div>
          <div class='carouselIndicators'>
            <img
              class='d-block w-100'
              src={Michael}
              alt="Ganief always tries his best and is a dependable person to code
                alongside with and I'm sure he will be a great person to know in
                the future - Micheal bruer"
            />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselIndicators'
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
          href='#carouselIndicators'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='false'>
            {" "}
          </span>
          <span class='sr-only'>Next </span>
        </a>
      </div>
    </div>
  );
};

export default Work;
