import React from "react";
import Modal from "./modal";

const onemail = () => {
  return <Modal />;
};

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 id='Contact'>
          <a href='#modal' onClick={onemail}>
            Get in touch
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
