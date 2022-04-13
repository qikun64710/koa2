let Article = require('../models/Article.js');

// 分页查询
const findAndCountAll = async function(ctx,next){
    let {page = 1,count = 10 } = ctx.request.query;
    const result = await Article.findAndCountAll(Number(page),Number(count));
    ctx.response.body = {
        code:200,
        info:result
    }
}
// 添加文章
const addArticle = async function(ctx,next){
    let data = ctx.request.body
    const result = await Article.addArticle(data)
    ctx.response.body = {
        code:200,
        info:result
    }
}
// 根据id查找文章
const findArticle = async function(ctx,next){
    let {id} = ctx.request.query
    const result = await Article.findArticle(id)
    ctx.response.body = {
        code:200,
        data:result[0],
        msg:'操作成功'
    }
}
module.exports =  {
    findAndCountAll,
    addArticle,
    findArticle
}
