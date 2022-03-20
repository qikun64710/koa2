const db = require('../config/index.js');
module.exports = db.defineModel('Category',{
    name:{
        type:db.STRING(100),
    },
})