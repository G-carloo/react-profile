import React, { useState } from "react";
import Errors from "../extras/errors";

const Register = () => {
  const alertcontext = useContext(AlertContext);

  const { Alert } = alertcontext;

  const [user, newUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { name, email, phone, password, password2 } = user;

  const onChange = (e) => newUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      Alert("Please fill all fields", "danger");
    } else if (password !== password2) {
      Alert("Passwords do not match", "danger");
    } else {
      console.log("Done");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            placeholder='Please enter your name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='Please enter your email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone number</label>
          <input
            type='phone'
            name='phone'
            value={phone}
            onChange={onChange}
            placeholder='Please enter your phone'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='Please enter your password'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password2'
            name='password2'
            value={password2}
            onChange={onChange}
            placeholder='Confirm password'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
