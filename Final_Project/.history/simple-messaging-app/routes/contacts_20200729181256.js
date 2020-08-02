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

app.put("/", (req, res) => {
  res.send("Contact has been updated");
});

app.delete("/", (req, res) => {
  res.send("Contact has been deleted");
});