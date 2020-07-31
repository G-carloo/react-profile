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
          console.log(console.error(err.msg))
      }
    .catch(err) {
        console.error(err.msg)
        console.log(err);
    }
  
});

// Getting messages and displaying them
messages.get("/chats", (req, res) => {
  res.json({ msg: "Message sent" });
});
