const { Sequelize } = require("sequelize");

// create a sequelize instance,
// this instance is used to define Models in our express app,
// then we use the models to query the database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const connection = () => {
  // test the database connection, if it connects display success msg, else show error
  sequelize
    .authenticate() // TODO add comment here
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Error while connecting to DB...", err);
    });
};

module.exports = { sequelize, connection };
