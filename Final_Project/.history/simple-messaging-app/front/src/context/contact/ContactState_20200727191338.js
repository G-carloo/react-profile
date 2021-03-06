import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      { id: 1, name: "Jill Johnson", phone: "0987654321", type: "personal" },
      { id: 2, name: "Sara Watson", phone: "1234567890", type: "personal" },
      { id: 3, name: "Harry White", phone: "6789054321", type: "professional" },
    ],
  };

  const [state, disatch] = useReducer(contactReducer, initialState);

  //
  //
  //
  //
  //
  //

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
