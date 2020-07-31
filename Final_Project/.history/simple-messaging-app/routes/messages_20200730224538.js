const express = require("express");
const router = express.Router();

const Messages = require("../participants/Message");
// messages.use(cors());

// Sending private messages
router.post("/chats", (req, res) => {
  const message = {
    name: req.body.name,
    messages: req.body.msg,
  };

  if (messages) {
    Messages.create(message)
      .then((messages) => {
        res.json({ msg: "Message has been sent" });
      })
      .catch((err) => {
        res.send("error" + err);
      });
  } else {
    res.send({ status: "error" + err });
  }
});

// Getting messages and displaying them
router.get("/chats", (req, res) => {
  messages;
});
