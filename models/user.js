const userModel = require('../model.js') //引入user的表结构
// 通过名字查找
const getUserByName = async function(user_name){
    const userInfo = await userModel.user.findOne({
        where:{
            user_name:user_name
        }
    })
    return userInfo
}
const registe = async function(data){
    let {user_name,password} = data
    const result = await userModel.user.create({
        user_name:user_name,
        password:password
    })
    return result
}
export default {
    getUserByName,
    registe
}