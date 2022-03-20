const modelCategory = require('../model.js');
// 添加分类
const addCategory = async function(data){
    let {name} = data
    const result = await modelCategory.Category.create({
        name:name
    });
    return result;
}
// 删除分类
const deleteCategory = async function(id){
    const reuslt = await modelCategory.destroy({
        where:{
            id:id
        }
    });
    return reuslt;
}
// 修改分类名称
const updateCategory = async function(id,name){
    const result = await modelCategory.update({
        name:name
    },{
        where:{
            id:id
        }
    });
    return result;
}
// 查找所有分类
const findAllCategory = async function(){
    const result = await modelCategory.findAll({
        attributes:['name']
    });
    return result;
}
// 模糊查询
const fuzzyFind = async function(name){
    const result = await modelCategory.findOne({
        attributes:['name'],
        where:{
            name:{
                $like:`%${name}%`
            }
        }
    });
    return result;
}
export default {
    addCategory,
    deleteCategory,
    updateCategory,
    findAllCategory,
    fuzzyFind
}