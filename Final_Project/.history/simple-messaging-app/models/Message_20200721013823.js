const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    ref: "messages",
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("messages", MessageSchema);
