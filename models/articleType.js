const db = require('../config/index.js');
module.exports = db.defineModel('article_type',{
    name: {
        type: db.STRING(100)
    }
})