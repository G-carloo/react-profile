import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div>
      <h3>
        {name}
        <span>{type}</span>
      </h3>
    </div>
  );
};

export default ContactItem;
