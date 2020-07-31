const mongoose = require("mongoose");
const express = require("express");

app.post("/", (req, res) => {
  res.send("It's been done!");
});
