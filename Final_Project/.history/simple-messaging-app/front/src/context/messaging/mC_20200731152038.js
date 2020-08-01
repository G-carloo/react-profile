import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./cContext";
import contactReducer from "./cReducer";
import { SEND_MESSAGE, GET_MESSAGES } from "../Functions";
