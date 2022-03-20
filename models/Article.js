const modelArticle = require('../model.js');
// 添加文章
const addArticle = async function(data){

}
// 删除文章
const deleteArticle = async function(id){
    const reuslt = await modelArticle.destroy({
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
const findAllArticle = async function(page,count){
    const result = await modelArticle.findAndCountAll({
        offset: (page - 1) * count,
        limit: count,
        where: filters,
    });
    return result;
}
// 模糊查询文章
const fuzzyFind = async function(name){
    
}
export default {
    addArticle,
    deleteArticle,
    updateArticle,
    findAllArticle,
    fuzzyFind
}