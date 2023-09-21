const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    //host: 'localhost',
    host: '127.0.0.1',  // 'localhost' not working on some Mac systems. Use 127.0.0.1.
    dialect: 'mysql',
    port: 3306
  }
);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PW:", process.env.DB_PW);

module.exports = sequelize;
