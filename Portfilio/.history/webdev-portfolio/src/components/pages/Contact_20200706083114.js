import React from "react";
import Modal from "./modal";

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <button>
          <h2 id='Contact'>
            <a href='#Form' onClick={Modal}>
              Get in touch
            </a>
          </h2>
        </button>
      </div>
    </div>
  );
};

export default Contact;
