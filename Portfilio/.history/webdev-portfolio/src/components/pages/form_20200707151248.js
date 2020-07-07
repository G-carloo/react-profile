import React from "react";

const form = {
  textalign: "center",
  padding: "100px",
  justifycontent: "center",
  boxsizing: "border-box",
  boxshadow: "black",
  width: "50px",
};

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action='mgcarloo6@gmail.com'
        method='POST'
        style={form}
      >
        {/* <!-- add your custom form HTML here --> */}
        <label className=''>Email:</label>
        <input type='email' name='email' placeholder='Enter email . . .' />
        <label className=''>Message:</label>
        <input type='text' name='message' placeholder="What's on your mind ?" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}