const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Registering a user
router.post("/", async (req, res) => {
  user: {
    name, email, phone, password, password2;
  }

  const salt = await jwt.bcrypt;

  try {
    const salt = await bcrypt.hash(req.body.password, 6);
  } catch (err) {
    console.error(msg);
    res.json(402).msg("An error occurred");
  }
  res.send("It's been done!");
});

// Logging in
router.post("/", (req, res) => {
  res.send("It's been done!");
});

module.exports = router;
