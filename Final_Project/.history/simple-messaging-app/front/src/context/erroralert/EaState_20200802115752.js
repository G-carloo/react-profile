import React, { useReducer } from "react";
import axios from "axios";
import eaContext from "./eaContext";
import eaReducer from "./eaReducer";
import { SET_ALERT, REMOVE_ALERT } from "../Functions";

const eaState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(aReducer, initialState);

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
