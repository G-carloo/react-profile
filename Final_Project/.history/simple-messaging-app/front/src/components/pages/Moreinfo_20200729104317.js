import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { header } from "express-validator";

class Moreinfo extends Component {
  Modal = () => {
    return (
      <div.modal-sm.fade>
        <div.modal-header>More</div.modal-header>
      </div.modal-sm.fade>
    );
  };

  render() {
    return (
      <div className='md'>
        <h2>More Information</h2>
        <p>
          Read more at{" "}
          <Link to='/About' href='#About'>
            <a href='#About' />
            About
          </Link>
        </p>
        <p>
          View{" "}
          <Link to='/Contacts' href='#Contacts'>
            <a href='#Contacts' />
            Contacts, Add or edit
          </Link>
        </p>
      </div>
    );
  }
}

$("#myModal").modal();

export default Moreinfo;
