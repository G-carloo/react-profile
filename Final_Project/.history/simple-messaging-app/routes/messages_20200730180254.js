const express = require("express");
const router = express.Router();

const Messages = require("../participants/Message");
messages.use(cors());

// Sending private messages
messages.post("/", (req, res) => {
  res.json({ msg: "Message sent" });
});

// Getting messages and displaying them
messages.get("/", (req, res) => {
  res.json({ msg: "Message sent" });
});
