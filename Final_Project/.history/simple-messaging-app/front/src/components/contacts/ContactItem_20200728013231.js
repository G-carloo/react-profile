import React from "react";

const ContactItem = ({ contacts }) => {
  const { id, name, email, phone, type } = contacts;

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
