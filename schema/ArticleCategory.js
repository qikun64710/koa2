const db = require('../config/index.js');
module.exports = db.defineModel('ArticleCategory',{
    article_id:{
        type:db.INTEGER(11),
    },
    category_id:{
        type:db.INTEGER(11),
    },
})