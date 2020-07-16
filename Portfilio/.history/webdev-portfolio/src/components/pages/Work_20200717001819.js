import React from "react";

const test = {
  margin: "100",
  padding: "50",
};

const Work = () => {
  return (
    <div className='text-center'>
      <div style={test}>
        <h2 id='Work' style={test}>
          Testimonials
        </h2>
        <div className='test'>
          <p className='sub'>
            "Ganief is a hardworking and curious individual, who shows a
            dedication and passion towards coding, as well as a strong desire to
            learn and progress." - Jason Wandrag
          </p>
          <p className='sub'>
            "Ganief's hard work and determination to work in an industry he had
            no prior knowledge in always amazes me. He's eagerness to learn and
            help others is what inspires me the most!" - Josh Baron
          </p>
          <p className='sub'>
            "Ganief is a passion-driven team player whos well organized. He
            learns a lot from his mistakes and never does them again." - Philani
            Sithembiso Ndhlela
          </p>
          <p className='sub'>
            "He's consistency shows that he is dedicated to his work" - Moghamed
            Junaid Salie
          </p>
          <p className='sub'>
            "Ganief always tries his best and is a dependable person to code
            alongside with and I'm sure he will be a great person to know in the
            future" - Micheal bruer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
