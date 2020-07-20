const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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

module.exports = mongoose.model("user", UserSchema);
