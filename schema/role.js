const db = require('../config/index');
module.exports = db.defineModel('role',{
    name:{
        type:db.STRING(64),
        allowNull:true
    },
    status:{
        type:db.INTEGER(10),
        allowNull:false
    }
})