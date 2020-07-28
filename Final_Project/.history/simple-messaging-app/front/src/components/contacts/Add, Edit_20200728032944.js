import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const Edit = () => {
  const contactContext = useContext(ContactContext);

  const [contact, editContact] = useState({
    name: "",
    phone: "",
    type: "personal",
  });

  const { name, phone, type } = contact;

  const onChange = (e) =>
    editContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    editContact({
      name: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <form className='form' onSubmit={onSubmit}>
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
        onChange={onChange}
      />
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional
      <div>
        <input type='submit' value='Add contact' className='' />
      </div>
    </form>
  );
};

export default Edit;
