const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("messages", MessageSchema);
