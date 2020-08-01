import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
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
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Please enter your name'
            />
          </div>
        </form>
      </div>
    );
  }
}
