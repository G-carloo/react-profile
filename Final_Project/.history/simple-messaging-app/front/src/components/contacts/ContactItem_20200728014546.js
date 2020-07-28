import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div>
      <h3>{name}</h3>
      <h4>
        <span>{type}</span>
      </h4>
    </div>
  );
};

export default ContactItem;
