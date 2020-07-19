import React, { useReducer } from "react";
import axios from "axios";
import messageContext from "./messageContext";
import messageReducer from "./messageReducer";
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

const MessageState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(messageReducer, initialState);

  // Get Messages
  const getmessages = async () => {
    try {
      const res = await axios.get("/api/info");

      dispatch({
        type: GET_MESSAGES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //   Send Message
  const sendmesage = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);

      dispatch({
        type: SEND_MESSAGES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //   Send pictures
  const sendpictures = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({
        type: SEND_PICTURES,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //   Get pictures
  const getpictures = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: GET_PICTURES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  
  //  Send Audios
  const sendaudios = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: SEND_AUDIOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }

    
  //   Get Audios
  const getaudios = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: GET_AUDIOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }

    
  //   Send Videos
  const sendvideos = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: SEND_VIDEOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }

    
  //   Get videos
  const getvideos = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: GET_VIDEOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }

    
  //   Send Files
  const sendfiles = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: SEND_FILES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }

    
  //   Get files
  const getfiles = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: GET_FILES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }

  return (
    <messageContext.Provider
      value={{
      }}
    >
      {props.children}
    </messageContext.Provider>
  );
};

export default MessageState