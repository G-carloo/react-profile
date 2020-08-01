import React, { Component } from "react";

export class Login extends Component {
  sign = {};

  render() {
    return (
      <form action=''>
        <h1>Login</h1>
        <label for=''>
          <input type='text' name='name' placeholder='Please enter your name' />
        </label>
        <label for=''>
          <input
            type='text'
            name='password'
            placeholder='Please enter your password'
          />
        </label>
        <button type='submit'>submit</button>
      </form>
    );
  }
}

export default Login;
