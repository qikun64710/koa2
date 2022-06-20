const db = require('../config/index');
module.exports = db.defineModel('role_permission',{
    state: {
        type: db.INTEGER('tiny'),
        allowNull: false,
        defaultValue: 1,
        comment: '状态：1/正常'
    }
})