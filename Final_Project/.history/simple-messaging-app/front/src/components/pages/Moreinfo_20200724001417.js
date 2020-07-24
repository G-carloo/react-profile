import React, { Component } from "react";
import ReactDOM from "react-dom";

class DashBoard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>Modal</h1>
        <button type='button' onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}

const Moreinfo = () => {
  return;
};

export default Moreinfo;
