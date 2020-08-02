import React, { useReducer } from "react";
import axios from "axios";
import eaContext from "./eaContext";
import eaReducer from "./eaReducer";
import { SET_ALERT, REMOVE_ALERT } from "../Functions";

const eaState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(eaReducer, initialState);

  return <eaContext.Provider value={{}}>{props.children}</eaContext.Provider>;
};

export default eaState;
