import React from "react";
import "bootstrap";
import Junaid from "./Junaid S.jpg";
import Michael from "./Michael b.jpg";
import Philani from "./Philani.1.jpg";
import Jason from "./Jason.jpg";
import Josh from "./Josh.jpg";

const Wandrag = {
  padding: "0px",
  verticalalign: "middle",
  height: "-webkit-fill-available",
  objectfit: "cover",
  textdecorationcolor: "grey",
};

const Isithembiso = {
  padding: "0px",
  verticalalign: "middle",
  height: "-webkit-fill-available",
  objectfit: "cover",
};

const Salie = {
  padding: "0px",
  verticalalign: "middle",
  height: "-webkit-fill-available",
  objectfit: "cover",
};

const Bruwer = {
  padding: "0px",
  verticalalign: "middle",
  height: "-webkit-fill-available",
  objectfit: "cover",
};

const Baron = {
  padding: "0px",
  verticalalign: "middle",
  height: "-webkit-fill-available",
  objectfit: "cover",
};

const Work = () => {
  return (
    <div>
      <div
        id='carouselExampleIndicators'
        className='carousel slide slides'
        data-ride='carousel'
      >
        <h4 className='center'>
          <strong>Testimonials from peers</strong>
        </h4>
        <olf className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          >
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
        </olf>
        <div className='carousel-inner carousel-fade'>
          <div className='carousel-item active'>
            <img className='' src={Jason} alt='' style={Wandrag} />
            <div class='carousel-caption '>
              <h4>Jason Wandrag</h4>
              <p>
                Ganief is a hardworking and curious individual, who shows a
                dedication and passion towards coding, as well as a strong
                desire to learn and progress
              </p>
            </div>
          </div>
          <div className='carousel-item '>
            <img
              className=''
              src={Philani}
              alt='Second slide'
              style={Isithembiso}
            />
            <div class='carousel-caption '>
              <h4> Philani Sithembiso Ndhlela</h4>
              <p>
                {" "}
                Ganief is a passion-driven team player whos well organized. He
                learns a lot from his mistakes and never does them again.
              </p>
            </div>
          </div>
          <div className='carousel-item '>
            <img className='' src={Junaid} alt='Third slide' style={Salie} />
            <div class='carousel-caption '>
              <h4>Moghamed Junaid Salie</h4>
              <p>He's consistency shows that he is dedicated to his work</p>
            </div>
          </div>
          <div className='carousel-item '>
            <img className='' src={Michael} alt='Fourth slide' style={Bruwer} />
            <div class='carousel-caption '>
              <h4>Micheal bruwer</h4>
              <p>
                Ganief always tries his best and is a dependable person to code
                alongside with and I'm sure he will be a great person to know in
                the future
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img class='' src={Josh} alt='Fifth slide' style={Baron} />
            <div class='carousel-caption '>
              <h4>Josh Baron</h4>
              <p>
                Ganief's hard work and determination to work in an industry he
                had no prior knowledge in always amazes me. He's eagerness to
                learn and help others is what inspires me the most!
              </p>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='false'>
            {" "}
          </span>
          <span className='sr-only'>Previous </span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='false'>
            {" "}
          </span>
          <span className='sr-only'>Next </span>
        </a>
      </div>
    </div>
  );
};

export default Work;
