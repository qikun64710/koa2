const db = require('../config/index');
module.exports = db.defineModel('permission',{
    path: {
        type: db.STRING,
        allowNull: false,
        comment: '权限请求路径'
    },
    method:{
        type: db.STRING,
        allowNull: false,
        comment: '请求方法'
    },
    description: {
        type: db.STRING,
        allowNull: false,
        comment: '权限描述'
    },
    state: {
        type: db.INTEGER(10),
        allowNull: false,
        defaultValue: true,
        comment: '状态：1/正常'
    }
})