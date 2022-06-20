const db = require('../config/index');
module.exports = db.defineModel('menu_list',{
    parent_id:{
        type: db.INTEGER, // 字段类型
        allowNull: true, // 是否允许为空
        comment:'父级ID'
    },
    name: {
        type: db.STRING, // 字段类型
        allowNull: false, // 是否允许为空
        comment:'名称'
    },
    title: {
        type: db.STRING, // 字段类型
        allowNull: false, // 是否允许为空
        comment:'标题名称'
    },
    icon: {
        type: db.STRING, // 字段类型
        allowNull: true, // 是否允许为空
        comment:'菜单图标'
    },
    path: {
        type: db.STRING, // 字段类型
        allowNull: false, // 是否允许为空
        comment:'菜单路径'
    }
})