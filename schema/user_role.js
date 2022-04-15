const db = require('../config/index');
module.exports = db.defineModel('user_role',{
    uid:{
        type:db.INTEGER(11),
        allowNull:true
    },
    role_id:{
        type:db.INTEGER(11),
        allowNull:true
    }
})