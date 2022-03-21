const userModel = require('../model.js') //引入user的表结构
// 通过名字查找
const getUserByName = async function(name){
    const userInfo = await userModel.User.findOne({
        where:{
            name:name
        }
    })
    return userInfo
}
const registe = async function(data){
    let {name,password} = data
    const result = await userModel.User.create({
        name:name,
        password:password
    })
    return result
}
module.exports = {
    getUserByName,
    registe
}