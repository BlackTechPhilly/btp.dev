// Dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();

// Initializing Express
const app = express();

// Routes
const contactUs = require("./");

// Middleware
app.use("morgan");
app.use(cors());
app.use(bodyParser.json());
app.use("/", contactUs);

// Port
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
