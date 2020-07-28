import React, { useState } from "react";

const Edit = () => {
  const [contact, editContact] = useState({
    name: "",
    phone: "",
    type: "personal",
  });

  const { name, phone, type } = contact;

  return (
    <form>
      <h2>Add Contact</h2>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      />
    </form>
  );
};

export default Edit;
