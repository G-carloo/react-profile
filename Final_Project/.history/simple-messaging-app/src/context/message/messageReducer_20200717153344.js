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
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    case SEND_PICTURES:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false,
      };
    case GET_PICTURES:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        loading: false,
      };
    case SEND_AUDIOS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null,
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
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
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
