require("dotenv").config();

console.log(process.env.DB_USERNAME);

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "datemydaughter",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "datemydaughter",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "datemydaughter",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
};
