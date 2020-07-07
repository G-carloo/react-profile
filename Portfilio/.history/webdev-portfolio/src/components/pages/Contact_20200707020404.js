import React from "react";
import ModalComponent from "./modal";

const onemail = () => {
  return <ModalComponent />;
};

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 id='Contact' className=''>
          <a href='#modal' onClick={onemail}>
            <strong>Get in touch</strong>
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
