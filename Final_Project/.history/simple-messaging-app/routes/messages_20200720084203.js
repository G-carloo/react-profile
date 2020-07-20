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
      const messages = await Message.find({ message: req.message.id }).sort({
        date: -1,
      });
      res.json(messages);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

// POST api/messages, sends messages, Private
router.post(
    "/",
    [auth, [check("name", "Name is required").not().isEmpty()]],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { type } = req.body;
  
      try {
        const newMessage = new Message({
          type,
          user: req.user.id,
        });
  
        const contact = await newContact.save();
  
        res.json(contact);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );
  