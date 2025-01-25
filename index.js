require("dotenv").config(); // to use variables from env file

const cors = require("cors"); // to enable cross origin resource sharing
const express = require("express");
const { connection } = require("./config/dbconnection");
const applicationRoute = require("./routes/application");
const emailRoute = require("./routes/valid_email");

const app = express();

app.use(cors()); // enable cors so that client can access the server's resources

/**
 * express.json(): a middleware to parse incoming JSON to JS object,
 * and make them available under req.body.
 * without this, we would need to manually parse the json
 */
app.use(express.json()); // to use json

connection();

const apiPrefix = "/api";

app.use(apiPrefix, applicationRoute);
app.use(apiPrefix, emailRoute);

const port = process.env.PORT || 8080; // use the port from .env or use a default port

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
