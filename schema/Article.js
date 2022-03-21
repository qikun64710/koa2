const db = require('../config/index.js');
module.exports = db.defineModel('Article',{
    title:{
        type:db.STRING(100),
    },
    content:{
        type:db.TEXT,
    },
    like_num:{
        type:db.INTEGER(11),
        defaultValue:0
    },
    read_num:{
        type:db.INTEGER(11),
        defaultValue:0
    },
    description:{
        type:db.STRING(100)
    },
    type_id:{
        type:db.INTEGER(11),
        allowNull:true,
    },
})