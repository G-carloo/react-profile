const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contacts");
const Message = require("../models/Message");

// GET request messages,  Gets all messages, Private
router.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find({ message: req.message }).sort({
      date: -1,
    });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// POST request messages, sends messages, Private
router.post(
  "/",
  check("message", "Message is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message } = req.body;

    try {
      const newMessage = new Message({
        message,
        message: req.message,
      });

      const message = await newMessage.save();

      res.json(message);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// PUT request messages, updating messages, Private access
router.put("/:id", async (req, res) => {
  const { type } = req.body;

  // Build contact object
  const contactFields = {};
  if (type) contactFields.type = type;

  try {
    let message = await Message.findById(req.params.id);

    if (!message) return res.status(404).json({ msg: "Message not found" });

    // Making sure the message came from the user
    if (message.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    message = await Message.findByIdAndUpdate(
      req.params.id,
      { $set: messageFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// DELETE request messages/:id,  Delete message, Private access
router.delete("/:id", async (req, res) => {
  try {
    let message = await Message.findById(req.params.id);

    if (!message) return res.status(404).json({ msg: "Message not found" });

    // Make sure user sent the message
    if (message.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Message.findByIdAndRemove(req.params.id);

    res.json({ msg: "Message removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
