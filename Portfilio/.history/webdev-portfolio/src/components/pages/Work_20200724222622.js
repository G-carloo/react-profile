import React from "react";

const test = {
  margin: "100",
  padding: "50",
  textalign: "center",
};

const Work = () => {
  return (
    <div>
      <h2 id='Work' style={test}>
        Testimonials
      </h2>
      <div id='carouselIndicators' class='cs' data-ride='carousel'>
        <ol class='ci'>
          <li
            data-target='#carouselIndicators'
            data-slide-to='0'
            class='active'
          >
            {" "}
          </li>
          <li data-target='#carouselIndicators' data-slide-to='1'>
            {" "}
          </li>
          <li data-target='#carouselIndicators' data-slide-to='2'>
            {" "}
          </li>
          <li data-target='#carouselIndicators' data-slide-to='3'>
            {" "}
          </li>
          <li data-target='#carouselIndicators' data-slide-to='4'>
            {" "}
          </li>
        </ol>
        <div class='ci'>
          <div class='ci active'>
            <p>
              <strong>
                "Ganief is a hardworking and curious individual, who shows a
                dedication and passion towards coding, as well as a strong
                desire to learn and progress." - Jason Wandrag
              </strong>
            </p>{" "}
          </div>
          <div class='ci'>
            <p>
              <strong>
                "Ganief's hard work and determination to work in an industry he
                had no prior knowledge in always amazes me. He's eagerness to
                learn and help others is what inspires me the most!" - Josh
                Baron
              </strong>
            </p>
          </div>
          <div class='ci'>
            <p>
              <strong>
                "Ganief is a passion-driven team player whos well organized. He
                learns a lot from his mistakes and never does them again." -
                Philani Sithembiso Ndhlela
              </strong>
            </p>{" "}
          </div>
          <div class='ci'>
            <p>
              <strong>
                "He's consistency shows that he is dedicated to his work" -
                Moghamed Junaid Salie
              </strong>
            </p>{" "}
          </div>
          <div class='ci'>
            <p>
              <strong>
                "Ganief always tries his best and is a dependable person to code
                alongside with and I'm sure he will be a great person to know in
                the future" - Micheal bruer
              </strong>
            </p>{" "}
          </div>
        </div>
        <a
          class='ccp'
          href='#carouselIndicators'
          role='button'
          data-slide='prev'
        >
          <span class='ccpi' aria-hidden='false'>
            {" "}
          </span>
          <span class='sr-only'>Previous </span>
        </a>
        <a
          class='ccn'
          href='#carouselIndicators'
          role='button'
          data-slide='next'
        >
          <span class='ccni' aria-hidden='false'>
            {" "}
          </span>
          <span class='sr-only'>Next </span>
        </a>
      </div>
    </div>
  );
};

export default Work;
