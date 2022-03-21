const User = require('./User')
const Category = require('./Category')
const Article = require('./Article')

Category.hasMany(Article,{foreignKey:"type_id"})
Article.belongsTo(Category,{foreignKey:"type_id"})

module.exports = {
    User,
    Category,
    Article
}

