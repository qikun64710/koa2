const {Article,ArticleCategory,Category} = require('../../model.js');
const { paging } = require('../../util/index.js')
// 添加文章
const addArticle = async function(item){
    let {title,description,previewImage,content,categoryArr } = item
    const aResult = await Article.create({
        title,
        description,
        banner:previewImage,
        content:content
    })
    let arr = []
    categoryArr.forEach(m => {
        arr.push({
            article_id:aResult.id,
            category_id:m
        })
    });
    const acResult = await ArticleCategory.bulkCreate(arr)
    return acResult
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
const findAndCountAll = async function(page,pageSize,type){
    let result;
    if(!type){
        result = await ArticleCategory.findAndCountAll({
            offset: (page - 1) * pageSize,
            limit: pageSize,
            include:[Category,Article]
        },{
            where: {
                name: type
            }
        });
    }else{
        result = await Article.findAndCountAll({
            offset: (page - 1) * pageSize,
            limit: pageSize,
        });
    }
    let obj = paging(result,pageSize,page)
    return obj;
}
const findArticle = async function(id){
    const result = await Article.findAll({
        where: {
            id: id
        }
    });
    return result;
}
// 模糊查询文章
const fuzzyFind = async function(name){
    
}

module.exports =  {
    addArticle,
    deleteArticle,
    updateArticle,
    findAndCountAll,
    fuzzyFind,
    findArticle
}