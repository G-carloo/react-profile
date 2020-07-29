import React from "react";

const Register = () => {
  const [user, addUser] = useState({
    name: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { name, phone, password, password2 } = user;

  const onChange = (e) => addUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <div className=''>
      <h1>
        Account <span className=''>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className=''>
          <label htmlFor=''>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className=''>
          <label htmlFor='phone'>Phone</label>
          <input type='text' name='phone' value={phone} onChange={onChange} />
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
        <div className=''>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password2'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input typ='submit' value='Register' className='' />
      </form>
    </div>
  );
};

export default Register;
