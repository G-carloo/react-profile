const express = require("express");
const cors = require("cors");
const router = express.Router();
const { check } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Messages = require("../participants/Message");
users.use(cors());

messages.post("/", (req, res) => {
  res.json({ msg: "Message sent" });
});
