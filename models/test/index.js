import Sequelize from 'sequelize'
import config from '../../config/database.config.js'

// 实例化，并指定配置
export const sequelize = new Sequelize(config)
export const User = sequelize.import(__dirname + '/User')

sequelize.sync()

// 测试链接
sequelize
    .authenticate()
    .then(res => {
        console.log('数据库连接成功')
    })
    .catch( err => {
        console.log('数据库连接失败:',err)
    })