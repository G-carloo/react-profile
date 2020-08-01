import React, { Component } from "react";

export class Login extends Component {
  sign = {};

  render() {
    return (
      <form>
        <h1>Login</h1>
        <input type='text' name='name' placeholder='Please enter your name' />
        <input
          type='text'
          name='password'
          placeholder='Please enter your password'
        />
        <button type='submit'>submit</button>
      </form>
    );
  }
}

export default Login;
