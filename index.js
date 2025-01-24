const cors = require("cors"); // to enable cross origin resource sharing
const express = require("express");
const app = express();
require("dotenv").config(); // to use variables from env file

app.use(express.json()); // to use json

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
