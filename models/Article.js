const {Article} = require('../model.js');
const { paging } = require('../util/index.js')
// 添加文章
const addArticle = async function(item){
    let {title,content,description,typeid } = item
    const result = await Article.create({
        title,
        content,
        description,
        type_id:typeid
    })
    return result
}
// 删除文章
const deleteArticle = async function(id){
    const reuslt = await Article.destroy({
        where:{
            id:id
        }
    });
    return reuslt;
}
// 修改文章
const updateArticle = async function(){

}
// 分页查询文章
const findAndCountAll = async function(page,pageSize){
    const result = await Article.findAndCountAll({
        offset: (page - 1) * pageSize,
        limit: pageSize,
    });
    let obj = paging(result,pageSize,page)
    return obj;
}
// 模糊查询文章
const fuzzyFind = async function(name){
    
}

module.exports =  {
    addArticle,
    deleteArticle,
    updateArticle,
    findAndCountAll,
    fuzzyFind
}