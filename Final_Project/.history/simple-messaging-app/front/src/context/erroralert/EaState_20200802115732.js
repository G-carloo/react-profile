import React, { useReducer } from "react";
import axios from "axios";
import eaContext from "./eaContext";
import eaReducer from "./eaReducer";
import { SET_ALERT, REMOVE_ALERT } from "../Functions";

const eaState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: null,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(aReducer, initialState);

  // Register User
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Login User
  const deleteContact = (name) => {
    dispatch({ type: DELETE_CONTACT, payload: name });
  };

  // Load User
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Logout
  const clearCurrent = (contact) => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Clear Errors
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER, payload: null });
  };

  return (
    <aContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
      }}
    >
      {props.children}
    </aContext.Provider>
  );
};

export default eaState;
