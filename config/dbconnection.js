const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  database: "./database.sqlite",
});

const connection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Error while connecting to DB...", err);
    });
};

module.exports = { sequelize, connection };
