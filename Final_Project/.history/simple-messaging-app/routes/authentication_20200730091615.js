const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();

// Registering a user
app.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.hash(req.body.password, 6);
  } catch (err) {
    console.error(msg);
    res.json(402).msg("An error occurred");
  }
  res.send("It's been done!");
});

// Logging in
app.post("/", (req, res) => {
  res.send("It's been done!");
});

module.exports = router;
