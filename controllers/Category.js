const category = require('../models/Category.js');

// 添加分类
const category_addCategory = async function(ctx,next){
    const data = ctx.request.query
    let { name } = data
    if(!name){
        ctx.response.body = {
            success:false,
            info:'分类名称不能为空'
        }
        return
    }
    const addCategory_result = await category.addCategory(data);
    ctx.response.body = {
        success: true,
        cood:200,
        info:addCategory_result
    }
}
// 删除分类
const category_deleteCategory = async function(ctx,next){
    let { id } = ctx.request.query
    if(!id){
        ctx.response.body = {
            success:false,
            info:'分类id不能为空'
        }
        return
    }
    const reslut = await category.deleteCategory(id);
    ctx.response.body = {
        success: true,
        cood:200,
        info:reslut
    }
}
// 修改分类名称
const category_updateCategory = async function(ctx,next){
    let {id,name} = ctx.request.query
    if(!id){
        ctx.response.body = {
            success:false,
            info:'分类id不能为空'
        }
        return
    }
    if(!name){
        ctx.response.body = {
            success:false,
            info:'分类名称不能为空'
        }
        return
    }
    const reslut = await category.updateCategory(id,name);
    ctx.response.body = {
        success: true,
        cood:200,
        info:reslut
    }
}
const category_findAllCategory = async function(ctx,next){
    const reslut = await category.updateCategory();
    ctx.response.body = {
        success: true,
        cood:200,
        info:reslut
    }
}
const category_fuzzyFind = async function(ctx,next){
    let { name } = ctx.request.query
    if(!name){
        return
    }
    const reslut = await category.updateCategory();
    ctx.response.body = {
        success: true,
        cood:200,
        info:reslut
    }
}
module.exports = {
    category_addCategory,
    category_deleteCategory,
    category_updateCategory,
    category_findAllCategory,
    category_fuzzyFind
}