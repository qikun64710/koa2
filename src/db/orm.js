const { DataSource } = require('typeorm')

const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB,
    MYSQL_PORT
} = require('../config/config.default')
const Orm = new DataSource({
    type: "mysql",
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USER,
    password: MYSQL_PWD,
    database: MYSQL_DB,
    synchronize: true,
    pool: {
        max: 5,
        min: 0,
        idleTimeoutMillis: 10000
    }
})
// Orm.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })
module.exports = Orm