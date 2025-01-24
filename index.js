const cors = require("cors"); // to enable cross origin resource sharing
const express = require("express");
const { connection } = require("./config/dbconnection");
const app = express();
require("dotenv").config(); // to use variables from env file

app.use(express.json()); // to use json
connection();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
