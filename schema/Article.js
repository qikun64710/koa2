const db = require('../config/index.js');
module.exports = db.defineModel('Article',{
    title:{
        type:db.STRING(100),
    },
    banner:{
        type:db.STRING(100)
    },
    description:{
        type:db.STRING(100)
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
})