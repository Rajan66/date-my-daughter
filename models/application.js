const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");

const application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    tableName: "applications",
    timestamps: true,
  }
);

module.exports = application;
