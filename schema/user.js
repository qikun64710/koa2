import bcrypt from 'bcryptjs'
const {sequelize,DataTypes} = require('../config/index')
const Antd_User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER(11),//字段类型
        primaryKey:true,//主键
        autoIncrement:true,//是否自增
    },
    user_name:{
        type:DataTypes.CHAR(50),//最大长度为50的字符串
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        set(value) {
            let salt = bcrypt.genSaltSync(10)
            let psw = bcrypt.hashSync(value, salt)
            this.setDataValue('password', psw);
        }
    }
},{
    tableName: 'User'
  })
module.exports = {
    Antd_User
}