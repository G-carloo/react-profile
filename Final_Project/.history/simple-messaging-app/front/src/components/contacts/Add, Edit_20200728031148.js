import React, { useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const Edit = () => {
  const [contact, editContact] = useState({
    name: "",
    phone: "",
    type: "personal",
  });

  const { name, phone, type } = contact;

  const onChange = (e) =>
    editContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <form className='form'>
      <h2>Add Contact</h2>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone number'
        name='number'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='pesonal'
        checked={type === "personal"}
      />
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
      />
      Professional
      <div>
        <input type='submit' value='Add contact' className='' />
      </div>
    </form>
  );
};

export default Edit;
