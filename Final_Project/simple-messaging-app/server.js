const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Simple Messaging..." })
);

// Define Routes
app.use("/auth", require("./routes/auth"));
app.use("/contacts", require("./routes/contacts"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
