const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../participants/User");

router.post("/register", (req, res) => {
  res.send(req.body);
});

module.exports = router;
