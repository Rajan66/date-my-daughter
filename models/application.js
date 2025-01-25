const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");

// get the connection from the config
// Models are used to talk with the database table
const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iq: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    essay: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "applications", // sets the table's name
    timestamps: true, // auto-creates createdAt, updatedAt
  }
);

module.exports = Application;
