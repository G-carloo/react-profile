import React from "react";
import MyForm from "./Form";

const Contact = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 id='Contact' className=''>
          <strong>Get in touch</strong>
        </h2>
        <h3 className='form'>Send me an Email</h3>
        <MyForm />
      </div>
    </div>
  );
};

export default Contact;
