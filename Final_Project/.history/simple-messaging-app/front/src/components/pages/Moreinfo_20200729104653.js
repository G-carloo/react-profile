import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { header } from "express-validator";

class Moreinfo extends Component {
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

export default Moreinfo;
