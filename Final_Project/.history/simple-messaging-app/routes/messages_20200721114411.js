const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contacts");
const Message = require("../models/Message");

// POST request messages, sends messages, end to end access
router.post("/", async (req, res) => {
  res, send("messaged sent");
});

// GET request messages,  Gets all messages, end to end access
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

// DELETE request messages/:id,  Delete message, end to end access
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
