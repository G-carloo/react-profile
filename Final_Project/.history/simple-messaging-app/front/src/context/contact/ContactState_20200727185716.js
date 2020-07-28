import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = props => {
    const initialState = {
        contacts : [
            _id
:
5f15749c97418c36d4fd08f0
message
:
Array
type
:
"professional"
name
:
"Sandy Shores"
email
:
"sandy@gmail.com"
phone
:
987654321
user
:
5f1571d697418c36d4fd08ef
date
:
2020-07-20T10:40:28.404+00:00
__v
:
0
_id
:
5f1577ac97418c36d4fd08f1
message
:
Array
type
:
"professional"
name
:
"Emily Taylor"
email
:
"emilytaylor@gmail.com"
phone
:
1234567890
user
:
5f1571d697418c36d4fd08ef
date
:
2020-07-20T10:53:32.818+00:00
__v
:
0
_id
:
5f1582e34ca30636d0f8a215
message
:
Array
type
:
"professional"
name
:
"Sandy Shores"
email
:
"sandy@gmail.com"
phone
:
987654321
user
:
5f1571d697418c36d4fd08ef
date
:
2020-07-20T11:41:23.575+00:00
__v
:
0
_id
:
5f1583664ca30636d0f8a217
message
:
Array
type
:
"personal"
name
:
"Junaid Mahmood"
email
:
"junaid@gmail.com"
phone
:
1118887654
user
:
5f1571d697418c36d4fd08ef
date
:
2020-07-20T11:43:34.614+00:00
__v
:
0
        ]
    }
}