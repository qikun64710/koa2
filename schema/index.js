const User = require('./User')
const Category = require('./Category')
const Article = require('./Article')
const ArticleCategory = require('./ArticleCategory')
const role = require('./role')
const user_role = require('./user_role')
const permission = require('./permission')
const role_permission = require('./role_permission')



Category.hasMany(ArticleCategory,{foreignKey:"category_id"})
ArticleCategory.belongsTo(Category,{foreignKey:"category_id"})
Article.hasMany(ArticleCategory,{foreignKey:"article_id"})
ArticleCategory.belongsTo(Article,{foreignKey:"article_id"})

module.exports = {
    User,
    Category,
    Article,
    ArticleCategory,
    role_permission,
    permission,
    user_role,
    role
}

