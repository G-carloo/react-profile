import React, { useReducer } from "react";
import axios from "axios";
import aContext from "./aContext";
import aReducer from "./aReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../Functions";

const aState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: null,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(aReducer, initialState);

  // Register User
  const register = asnyc FormData => {
    const web ={
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('users', FormData, web);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.response.data.msg
      })
    }
  }

  //Login User


  // Load User

  // Logout

  // Clear Errors

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

export default aState;
