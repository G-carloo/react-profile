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
}

const Moreinfo = () => {
  return;
};

export default Moreinfo;
