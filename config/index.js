const { Sequelize, Model, DataTypes } = require("sequelize");
import config from './database.config.js'
const sequelize = new Sequelize(config);
sequelize.sync()
.then(() => {
  console.log('init db ok')
})
.catch(err => {
  console.log('init db error', err)
})
module.exports = {
    sequelize,
    DataTypes
}