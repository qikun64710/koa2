import sequelize from '../config/index.js' //引入创建数据库的配置文件
const userModel = '../schema/user.js' //引入user的表结构
const user = sequelize.import(userModel)
// 通过id查找
const getUserByName = async function(name){
    const userInfo = await user.findOne({
        where:{
            user_name:name
        }
    })
    return userInfo
}
export default {
    getUserByName
}