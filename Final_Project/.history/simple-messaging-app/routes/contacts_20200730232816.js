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
app.get("/:id", async (req, res) => {
  const contacts = await Contacts.find({ user: req.user.name }).sort({ date: -1 })
});

// Update Contact
app.put("/", async (req, res) => {
  const { name, phone }

  let contact = await Contacts.findById( req.params.id )

  if(!contact) {
    res.send(404).json({ msg: "Contact not found" })
  } else {
    res.send(contact)
  }

  const contact = await Contacts.findByIdAndUpdate
});

// Delete Contact
app.delete("/", (req, res) => {
  const
});
