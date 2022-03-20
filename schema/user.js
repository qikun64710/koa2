import bcrypt from 'bcryptjs'
// const {sequelize,DataTypes} = require('../config/index')
const db = require('../config/index');
module.exports = db.defineModel('user',{
    user_name:{
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
    email:{
        type:db.STRING(100),
        allowNull:true
    },
    phone:{
        type:db.STRING(100),
        allowNull:true
    },
})