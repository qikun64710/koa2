const bcrypt = require('bcryptjs')
const db = require('../config/index');
module.exports = db.defineModel('user',{
    name:{
        type:db.STRING, //字段类型
        allowNull:false //是否为空
    },
    password:{
        type:db.STRING, //字段类型
        allowNull:false, //是否为空
    },
    status:{
        type:db.INTEGER(10), //字段类型
        allowNull:false, //是否为空
        defaultValue: 1, //默认值 1 有效，0 无效
    },
    avatar:{
        type:db.STRING(100), //字段类型
        allowNull:true //是否为空
    },
    email:{
        type:db.STRING(100), //字段类型
        allowNull:true //是否为空
    },
    phone:{
        type:db.STRING(100),
        allowNull:true
    },
    role_id: {
        type:db.INTEGER(10), //字段类型
        allowNull:false, //是否为空
    }
})