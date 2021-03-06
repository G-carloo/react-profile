import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {/* {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(
            contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))
          )} */}
        {contacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={500} classNames='item'>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
