const db = require('../config/index');
module.exports = db.defineModel('menu_perssion',{
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
    path: {
        type: db.STRING, // 字段类型
        allowNull: false, // 是否允许为空
        comment:'菜单路径'
    }
})