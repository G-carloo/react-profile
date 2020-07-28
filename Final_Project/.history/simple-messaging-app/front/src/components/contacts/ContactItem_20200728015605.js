import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, phone, type } = contact;

  return (
    <div>
      <h3>{name}</h3>
      <h4>
        <span
          className={
            "badge" +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h4>
      <ul>
        {phone && (
          <li>
            <i className='fas fa-user' />
            {phone}
          </li>
        )}
        {id && (
          <li>
            <i className='fas fa-id' />
            {id}
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactItem;
