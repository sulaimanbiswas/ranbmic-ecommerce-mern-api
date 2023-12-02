const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
dbConnect();

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
