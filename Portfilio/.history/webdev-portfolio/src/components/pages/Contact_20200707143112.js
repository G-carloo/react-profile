import React from "react";
import ModalComponent from "./modal";
import MyForm from "./Form";

// const onemail = () => {
//   return <ModalComponent />;
// };

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 id='Contact' className=''>
          <a href='#modal'>
            <strong>Get in touch</strong>
          </a>
        </h2>
        <MyForm />
      </div>
    </div>
  );
};

export default Contact;
