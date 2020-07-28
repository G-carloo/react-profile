import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Add some contacts</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.maps((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.maps((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
