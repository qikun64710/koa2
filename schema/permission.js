const db = require('../config/index');
module.exports = db.defineModel('permission',{
    title:{
        type:db.STRING(50),
        allowNull:true
    },
    actoin:{
        type:db.STRING(64),
        allowNull:true
    },
    status:{
        type:db.INTEGER(10),
        allowNull:false
    }
})