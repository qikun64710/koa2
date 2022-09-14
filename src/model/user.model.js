const { DataTypes } = require('sequelize')
const Seq = require('../db/seq')
// 创建文章模型
const User = Seq.defineModel('koa_user', 
    {
        user_name: {
            type: DataTypes.STRING,
            comment: '用户名'
        },
        password:{
            type:DataTypes.STRING,
            comment: '密码'
        }
    }
)
// User.sync({ force: true })
module.exports = User