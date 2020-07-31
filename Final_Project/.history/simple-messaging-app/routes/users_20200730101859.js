const express = require("express");
const router = express.Router();

const User = require("../participants/User");

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
