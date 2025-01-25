const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");

const ValidEmail = sequelize.define(
  "ValidEmail",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "valid_emails",
    timestamps: true,
  }
);

module.exports = ValidEmail;
