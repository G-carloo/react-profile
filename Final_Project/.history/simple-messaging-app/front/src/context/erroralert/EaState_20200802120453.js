import React, { useReducer } from "react";
import axios from "axios";
import eaContext from "./eaContext";
import eaReducer from "./eaReducer";
import { SET_ALERT, REMOVE_ALERT } from "../Functions";

const eaState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(eaReducer, initialState);

  //   Set Alert
  const Alert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
  };

  // Remove Alert

  return <eaContext.Provider value={{}}>{props.children}</eaContext.Provider>;
};

export default eaState;
