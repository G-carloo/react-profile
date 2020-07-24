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

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);

const Moreinfo = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal-display-block" : "modal-display-none";

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Moreinfo;
