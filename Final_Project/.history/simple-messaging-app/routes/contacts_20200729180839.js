const express = require("express");
const app = express();

// Get contacts of user
app.get("/", (req, res) => {
  res.send("Here it is");
});

// Create a contact
app.post("/", (req, res) => {
  res.send("Contacts has been added to the list");
});
