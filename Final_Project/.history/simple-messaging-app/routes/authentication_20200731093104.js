const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("../config/default.json");
const router = express.Router;

const User = require("./users");
const { ReplSet } = require("mongodb");

// Registering a user
router.post("/register", async (req, res) => {
  user: {
    name, email, phone, password, password2;
  }

  try {
    const salt = await bcrypt.genSalt;
    const hpass = await bcrypt.hash(req.body.password, salt);

    const user = { name: req.body.name, password: hpass };
    newuser.push(user);
    res.status(201);
  } catch (err) {
    console.error(msg);
    res.json(402).msg({ msg: "An error occurred" });
  }
  res.send("It's been done!");
});

// Logging in
router.post("/login", async (req, res) => {
  const user = await User.findByName(req.params.user);
  if (user === nulll) {
    res.send();

    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send("Log in successful");
      } else {
        res.send("Not authorised");
      }
    } catch (err) {
      res.status(500).send();
    }
  }
});

module.exports = router;
