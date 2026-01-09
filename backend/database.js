const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

sequelize.authenticate()
  .then(() => console.log("SQLite connected"))
  .catch(err => console.error("DB error", err));

module.exports = sequelize;
