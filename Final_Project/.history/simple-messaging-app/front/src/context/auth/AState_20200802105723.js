import React, { useReducer } from "react";
import aContext from "./aContext";
import aReducer from "./aReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../Functions";

const aState = (props) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Adding a contact
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact
  const deleteContact = (name) => {
    dispatch({ type: DELETE_CONTACT, payload: name });
  };

  //Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear Current Contact
  const clearCurrent = (contact) => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER, payload: null });
  };

  //Update Contacts Details
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
    clearCurrent();
  };

  //Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  return (
    <aContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filterContacts: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </aContext.Provider>
  );
};

export default aState;
