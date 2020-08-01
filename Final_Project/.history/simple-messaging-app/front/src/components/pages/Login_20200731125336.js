import React, { Component } from "react";

const Login = () => {
  sign = {};

  const onChange = (e) => newUser({ ...user, [e.target.name]: e.target.value });

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
};

export default Login;
