import React, { Component } from "react";
import axios from 'axios';

class Contactsdisplay extends Component {
  state = {
    contacts: null,
  };

  display = (contacts) {
    this.setState({
      contacts: add.target.friends[0]
    })
  }

  addContacts = () => {
    const ac = new FormData();
    ac.append("peeps", this.state.contacts, this.state.contacts.name);
    axios.post('', )
  }

  render() {
    return (
      <div className='md' id='Contacts'>
        <div>{/* <Contacts /> */}</div>
      </div>
    );
  }
}

export default Contactsdisplay;
