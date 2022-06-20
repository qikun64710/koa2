const db = require('../config/index');
module.exports = db.defineModel('role_menu_list',{
    state: {
        type: db.INTEGER('tiny'), // 字段类型
        allowNull: false, // 是否允许为空
        defaultValue: '1',
        comment: '状态：1/正常'
    }
})