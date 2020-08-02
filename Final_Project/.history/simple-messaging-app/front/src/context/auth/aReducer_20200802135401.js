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
import aContext from "./aContext";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {};
    default:
      return state;
  }
};
