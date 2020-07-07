import React from "react";
import MyForm from "./Form";

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 id='Contact' className=''>
          <strong>Get in touch</strong>
        </h2>
        <h3>Send me an email</h3>
        <MyForm />
      </div>
    </div>
  );
};

export default Contact;
