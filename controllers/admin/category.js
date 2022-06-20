const category = require('../../services/admin/category.js');

// 添加分类
const category_addCategory = async function(ctx,next){
    const data = ctx.request.query
    let { name } = data
    if(!name){
        ctx.response.body = {
            code:10001,
            msg:'分类名称不能为空',
            data:''
        }
        return
    }
    const addCategory_result = await category.addCategory(data);
    ctx.response.body = {
        msg: '添加标签成功',
        code:200,
        data:addCategory_result
    }
}
// 删除分类
const category_deleteCategory = async function(ctx,next){
    let { id } = ctx.request.query
    if(!id){
        ctx.response.body = {
            code:10001,
            msg:'分类id不能为空',
            data:''
        }
        return
    }
    const reslut = await category.deleteCategory(id);
    ctx.response.body = {
        msg: '删除成功',
        code:200,
        data:reslut
    }
}
// 修改分类名称
const category_updateCategory = async function(ctx,next){
    let {id,name} = ctx.request.query
    if(!id){
        ctx.response.body = {
            code:10001,
            msg:'分类id不能为空',
            data:''
        }
        return
    }
    if(!name){
        ctx.response.body = {
            code:10001,
            msg:'分类名称不能为空',
            data:''
        }
        return
    }
    const reslut = await category.updateCategory(id,name);
    ctx.response.body = {
        data: reslut,
        code:200,
        info:'操作成功'
    }
}
const category_findAllCategory = async function(ctx,next){
    const reslut = await category.findAllCategory();
    ctx.response.body = {
        msg: '查询成功',
        code:200,
        data:reslut
    }
}
const category_fuzzyFind = async function(ctx,next){
    let { name } = ctx.request.query
    if(!name){
        return
    }
    const reslut = await category.fuzzyFind();
    ctx.response.body = {
        msg: '查询成功',
        code:200,
        data:reslut
    }
}
module.exports = {
    category_addCategory,
    category_deleteCategory,
    category_updateCategory,
    category_findAllCategory,
    category_fuzzyFind
}