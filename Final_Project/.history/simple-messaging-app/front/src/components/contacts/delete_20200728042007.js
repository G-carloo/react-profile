import React from "react";
import ContactContext from "../../context/contact/contactContext";
import contactContext from "../../context/contact/contactContext";

const { deleteContact } = contactContext;

const onDelete = ({ contact }) => {
  deleteContact(id);
};

const Delete = () => {
  return (
    <div id='edit,delete'>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Delete;
