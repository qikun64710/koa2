const seq = require('../db/seq')
const { DataTypes } = require('sequelize')

const Menu = seq.defineModel('koa_menu', {
    name: {
        type: DataTypes.STRING,
        comment: '菜单名称'
    },
    url: {
        type: DataTypes.STRING,
        comment: '菜单连接'
    },
    pid: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
        comment: '父级id'
    },
    type: {
        type: DataTypes.INTEGER(11),
        comment: '1是blog的菜单，0 是后台管理的菜单'
    }
})
// 强制刷新表
// Menu.sync({ force: true })
module.exports = Menu