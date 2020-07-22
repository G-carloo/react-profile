const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

// const User = require("../models/User");
// const Contact = require("../models/Contacts");
const Message = require("../models/Message");

// POST request messages, sends messages, end to end access
router.post("/post message", (req, res) => {
  res.send(req.body);
});

// GET request messages,  Gets all messages, end to end access
router.get("/get message", (req, res) => {
  res.send("messages viewed below");
});

// PUT request messages,  Updates messages, end to end access
router.put("/update message", (req, res) => {
  res.send("messages viewed below");
});

// DELETE request messages/:id,  Delete message, end to end access
router.delete("/delete message", (req, res) => {
  res.send("Message deleted");
});

module.exports = router;
