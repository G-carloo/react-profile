import React from "react";
import Modal from "./modal";

const onemail = () => {
  return <Modal />;
};

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <button>
          <h2 id='Contact'>
            <a href='#modal' onClick={onemail}>
              Get in touch
            </a>
          </h2>
        </button>
        <button
          type='button'
          class='btn btn-primary'
          data-toggle='modal'
          data-target='#Employee1'
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Contact;
