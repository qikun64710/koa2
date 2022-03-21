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
module.exports =  {
    findAndCountAll
}
