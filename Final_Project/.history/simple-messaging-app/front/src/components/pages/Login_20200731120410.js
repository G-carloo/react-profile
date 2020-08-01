import React, { Component } from "react";

export class Login extends Component {
  sign = {};

  render() {
    return (
      <div className='form-container'>
        <h1>Login</h1>
        <form>
          <label htmlfor='name'>
            <input type='text' name='name' value={name} onChange={onChange} />
          </label>
          <label for='pasword'>
            <input
              type='text'
              name='password'
              value={name}
              onChange={onChange}
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
