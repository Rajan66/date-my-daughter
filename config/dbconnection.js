const { Sequelize } = require("sequelize");

// create a sequelize instance
// add more..
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const connection = () => {
  // connect to the sqlite database
  sequelize
    .sync({ alter: true })
    .then(() => console.log("Tables synced..."))
    .catch((err) => console.error("Error while syncing tables", err));

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
