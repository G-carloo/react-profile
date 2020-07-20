const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  messasge: {
    type: Object,
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
