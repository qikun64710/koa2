const bcrypt = require('bcryptjs')
const db = require('../config/index');
module.exports = db.defineModel('User',{
    name:{
        type:db.STRING(100),
        allowNull:false
    },
    password:{
        type:db.STRING,
        allowNull:false,
        set(value) {
            let salt = bcrypt.genSaltSync(10)
            let psw = bcrypt.hashSync(value, salt)
            this.setDataValue('password', psw);
        }
    },
    status:{
        type:db.INTEGER(10),
        allowNull:false,
    },
    avatar:{
        type:db.STRING(100),
        allowNull:true
    },
    email:{
        type:db.STRING(100),
        allowNull:true
    },
    phone:{
        type:db.STRING(100),
        allowNull:true
    },
})