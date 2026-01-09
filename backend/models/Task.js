const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false }
});

// Relation
User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = Task;
