const express = require("express");
const validator = require("express-validator");
const cors = require("cors");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Contacts = require("../participants/Contacts");
const { check } = require("express-validator");
contacts.use(cors());

// Creating/Adding A Contact
app.post(
  "/",
  [
    check("name", "Please enter a name").not().isEmpty(),
    check("phone", "Please enter a phone number").isNumeric.isLength(),
  ],
  (req, res) => {
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
  }
);

// Get contacts
app.get("/", (req, res) => {
  res.send("Here lies all your Contact");
});

// Update Contact
app.put("/", (req, res) => {
  res.send("Contact has been updated");
});

// Delete Contact
app.delete("/", (req, res) => {
  res.send("Contact has been deleted");
});
