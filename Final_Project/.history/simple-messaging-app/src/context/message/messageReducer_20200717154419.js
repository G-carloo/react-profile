import {
  SEND_MESSAGES,
  GET_MESSAGES,
  SEND_PICTURES,
  GET_PICTURES,
  SEND_AUDIOS,
  GET_AUDIOS,
  SEND_VIDEOS,
  GET_VIDEOS,
  SEND_FILES,
  GET_FILES,
  MESSAGE_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEND_MESSAGES:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case GET_MESSAGES:
      return {
        ...state,
        current: action.payload,
      };
    case SEND_PICTURES:
      return {
        ...state,
        current: action.payload,
      };
    case GET_PICTURES:
      return {
        ...state,
        current: action.payload,
      };
    case SEND_AUDIOS:
      return {
        ...state,
        current: action.payload,
      };
    case GET_AUDIOS:
      return {
        ...state,
        current: action.payload,
      };
    case SEND_VIDEOS:
      return {
        ...state,
        current: null,
      };
    case GET_VIDEOS:
      return {
        ...state,
        current: action.payload,
      };
    case SEND_FILES:
      return {
        ...state,
        filter: null,
      };
    case GET_FILES:
      return {
        ...state,
        current: action.payload,
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
