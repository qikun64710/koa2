const db = require('../config/index');
module.exports = db.defineModel('role',{
    name:{
        type: db.STRING, //字段类型
        allowNull: false, //是否为空
        comment: '角色名称'
    },
    description: {
        type: db.STRING, // 字段类型
        allowNull: true, // 是否允许为空
        comment: '角色描述'
    },
    status:{
        type: db.INTEGER(10), //字段类型
        allowNull: false, //是否为空
        defaultValue: 1, //默认值
        comment: '状态 ： 1有效 0 无效' //
    }
})