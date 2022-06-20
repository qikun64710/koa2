const userModel = require('../../model.js') //引入user的表结构
// 通过名字查找
const getUserByName = async function(name){
    return userModel.User.findAll({
        where:{
            name:name
        }
    })
}
const registe = async function(data){
    return userModel.User.create(data)
}
module.exports = {
    getUserByName,
    registe
}