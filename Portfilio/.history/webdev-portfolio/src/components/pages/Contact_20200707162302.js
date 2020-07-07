import React from "react";
import MyForm from "./Form";

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 id='Contact' className=''>
          <strong>Send me an email</strong>
        </h2>
        <MyForm />
      </div>
    </div>
  );
};

export default Contact;
