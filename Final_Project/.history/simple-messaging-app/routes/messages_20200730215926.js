const express = require("express");
const router = express.Router();

const Messages = require("../participants/Message");
messages.use(cors());

// Sending private messages
messages.post("/chats", (req, res) => {
  const messageData = {
    name: req.body.name,
    messages: req.body.msg,
  }

  if(messages) {
      Messages.create(messagesData)
      .then((messages) => {
          res.json({ msg: "Message sent" })
      })}
    else {
          res.send("There was an error")
    })
    .catch((err) {
res.send("error" + err)    }
    
});

// Getting messages and displaying them
messages.get("/chats", (req, res) => {
  res.json({ msg: "Message sent" });
});
