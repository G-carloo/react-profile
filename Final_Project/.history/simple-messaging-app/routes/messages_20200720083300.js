const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const 

const User = require("../models/User");
const Contact = require("../models/Contacts");
const Message = require("../models/Message");

// GET api/messages,  Gets all messages, Private
router.get("/", auth, async (req, res) => {
    try {
      const messages = await Message.find({ user: req.user.id }).sort({
        date: -1,
      });
      res.json(messages);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  