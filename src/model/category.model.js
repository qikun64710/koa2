const seq = require('../db/seq')
const { DataTypes } = require('sequelize')

const Category = seq.defineModel('koa_category', {
    name: {
        type: DataTypes.STRING,
        comment: '分类名称'
    }
})
// 强制刷新表
// Category.sync({ force: true })
module.exports = Category