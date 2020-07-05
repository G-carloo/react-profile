import React from "react";

const onSubmit = () => {};

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <button>
          <h2 id='Contact'>
            <a href='#' onClick={onSubmit}>
              Get in touch
            </a>
          </h2>
        </button>
      </div>
    </div>
  );
};

export default Contact;
