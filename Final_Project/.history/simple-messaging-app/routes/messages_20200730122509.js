const express = require("express");
const cors = require("cors");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Messages = require("../participants/Message");

messages.post("/", (req, res) => {
  res.json({ msg: "Message sent" });
});
