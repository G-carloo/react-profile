const express = require("express");
const cors = require("cors");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Contacts = require("../participants/Contacts");
users.use(cors());

// Get contacts of user
app.get("/", (req, res) => {
  const Contact = {
    name: req.body.name,
    phone: req.body.phone,
    created: today,
  };

  Contact.create(contactData)
    .then((contact) => {
      res.json({ status: contact.name + "Has been added as a contact" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

// Create a contact
app.post("/", (req, res) => {});

app.put("/", (req, res) => {
  res.send("Contact has been updated");
});

app.delete("/", (req, res) => {
  res.send("Contact has been deleted");
});
