import React, { Fragment, useContext } from "react";
import Contact from "./Contact";
import ContactContext from "../../context/contact/cContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  if (contacts.length === 0) {
    return <h4>Add some contacts</h4>;
  }

  return (
    <Fragment>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
