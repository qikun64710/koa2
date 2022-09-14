const { DataTypes } = require('sequelize')
const Seq = require('../db/seq')
// 创建文章模型
const ArticleCategory = Seq.defineModel('koa_article_category', 
    {
        articleId: {
            type: DataTypes.INTEGER(11),
            comment: '文章id'
        },
        categoryId: {
            type: DataTypes.INTEGER(11),
            comment: '类别id'
        }
    }
)
// ArticleCategory.sync({ force: true })
module.exports = ArticleCategory