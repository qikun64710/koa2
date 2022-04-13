const User = require('./User')
const Category = require('./Category')
const Article = require('./Article')
const ArticleCategory = require('./ArticleCategory')


Category.hasMany(ArticleCategory,{foreignKey:"category_id"})
ArticleCategory.belongsTo(Category,{foreignKey:"category_id"})
Article.hasMany(ArticleCategory,{foreignKey:"article_id"})
ArticleCategory.belongsTo(Article,{foreignKey:"article_id"})

module.exports = {
    User,
    Category,
    Article,
    ArticleCategory
}

