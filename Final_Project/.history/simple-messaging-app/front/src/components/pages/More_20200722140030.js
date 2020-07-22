import React from "react";
import ReactDOM from "react-dom";

const Moreinfo = () => {
  return (
    <div>
      <h2>This is modal</h2>
    </div>
  );
};

const Dashboard = () => {
  state: {
    show: false;
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render();
  return (
    <Fragment>
      <Modal show={this.state.showModal} handleClose={this.state.hideModal}>
        <p>Info</p>
        <p>no info</p>
      </Modal>
      <button type='button' onClick={this.showModal}>
        Open
      </button>
    </Fragment>
  );
};

export default Moreinfo;
Dashboard;
