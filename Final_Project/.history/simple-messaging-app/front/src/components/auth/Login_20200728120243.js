import React, { useState } from "react";

const Register = () => {
  const [user, addUser] = useState({
    name: "",
    password: "",
  });

  const { name, password } = user;

  const onChange = (e) => addUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <div className=''>
      <h1>
        Account <span className=''>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className=''>
          <label htmlFor=''>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>

        <div className=''>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <input type='submit' value='Login' className='' />
      </form>
    </div>
  );
};

export default Register;
