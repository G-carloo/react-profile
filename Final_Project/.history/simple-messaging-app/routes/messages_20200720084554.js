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
  
        const message = await newmessage.save();
  
        res.json(message);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );

// PUT api/messages, updating messages, Private
router.put("/:id", auth, async (req, res) => {
    const { name, email, phone, type } = req.body;
  
    // Build contact object
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
  
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({ msg: "Contact not found" });
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "Not authorized" });
      }
  
      contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { $set: contactFields },
        { new: true }
      );
  
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });