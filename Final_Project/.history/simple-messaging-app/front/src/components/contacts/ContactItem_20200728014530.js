import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div>
      <h3>{name}</h3>
      <h5>
        <span>{type}</span>
      </h5>
    </div>
  );
};

export default ContactItem;
