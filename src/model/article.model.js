const { DataTypes } = require('sequelize')
const Seq = require('../db/seq')
// 创建文章模型
const Article = Seq.defineModel('koa_article', 
    {
        title: {
            type: DataTypes.STRING,
            comment: '文章标题'
        },
        banner:{
            type:DataTypes.STRING,
            comment: '文章banner'
        },
        description:{
            type:DataTypes.STRING,
            comment: '文章描述'
        },
        content:{
            type:DataTypes.TEXT,
            comment: '文章内容'
        },
        like_num:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue:0,
            comment: '喜欢的数量'
        },
        read_num:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue:0,
            comment: '阅读的数量'
        },
    }
)
// Article.sync({ force: true })
module.exports = Article