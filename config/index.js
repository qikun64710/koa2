import Sequelize from 'sequelize';
import config from './database.config.js'
const sequelize = new Sequelize(config);
export default {
    sequelize
}