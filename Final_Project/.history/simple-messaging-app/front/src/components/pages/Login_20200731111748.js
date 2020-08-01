import React, { Component } from "react";

export class Login extends Component {
  sign = {};

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type='text' name='name' placeholder='Please enter your name' />
      </div>
    );
  }
}

export default Login;
