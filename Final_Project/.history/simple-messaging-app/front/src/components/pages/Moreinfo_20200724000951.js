import React, { Component } from "react";
import ReactDOM from "react-dom";

class DashBoard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ showModal: true });
  };
}

const Moreinfo = () => {
  return;
};

export default Moreinfo;
