import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
// import Delete from "./delete";

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

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  //   const { deleteContact } = contactContext;

  const { id, name, phone, type } = contact;

  //   const onDelete = ({ contact }) => {
  //     deleteContact(id);
  //   };

  return (
    <div className='Ci'>
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
          <p>
            <i className='fas fa-user' />
            {phone}
          </p>
        )}
      </ul>
      <p>
        <button className='bg' onClick={onDelete}>
          More
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
