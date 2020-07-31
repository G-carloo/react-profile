const mongoose = require("mongoose");
const { Timestamp } = require("mongodb");
const Schema = mongoose.Schema;

const MessageSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaType,
    ref: "users",
  },
  message: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Timestamp,
    default: Timestamp.time,
  },
});

module.exports = mongoose.model("messages", MessageSchema);
