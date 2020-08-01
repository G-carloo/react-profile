import React, { Component } from "react";

export class Login extends Component {
  sign = {};

  render() {
    return (
      <div className='form-container'>
        <h1>Login</h1>
        <form>
          <label for='name'>
            <input
              type='text'
              name='name'
              placeholder='Please enter your name'
            />
          </label>
          <label for='pasword'>
            <input
              type='text'
              name='password'
              placeholder='Please enter your password'
            />
          </label>
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
