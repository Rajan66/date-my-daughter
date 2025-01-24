const cors = require("cors"); // to enable cross origin resource sharing
const express = require("express");
const { connection } = require("./config/dbconnection");
const app = express();
require("dotenv").config(); // to use variables from env file

/**
 * express.json(): a middleware to parse incoming JSON to JS object,
 * and make them available under req.body.
 * without this, we would need to manually parse the json
 */
app.use(express.json()); // to use json
connection();

const port = process.env.PORT || 8080; // use the port from .env or use a default port

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
