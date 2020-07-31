const express = require("express");
const router = express.Router();

const Messages = require("../participants/Message");
messages.use(cors());

// Sending private messages
messages.post("/chats", (req, res) => {
  res.json({ msg: "Message sent" });
});

// Getting messages and displaying them
messages.get("/chats", (req, res) => {
  res.json({ msg: "Message sent" });
});
