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
        <Modal show={this.state.modalToggle}>
          <div style={{ color: "black" }}>The Best Has Happened To ME</div>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
