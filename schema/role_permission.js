const db = require('../config/index');
module.exports = db.defineModel('role_permission',{
    role_id:{
        type:db.INTEGER(11),
        allowNull:true
    },
    permission_id:{
        type:db.INTEGER(10),
        allowNull:true
    }
})