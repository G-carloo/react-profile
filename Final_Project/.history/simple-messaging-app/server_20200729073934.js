const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware

// Define Routes

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
