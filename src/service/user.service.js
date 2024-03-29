const User = require('../model/user.model')
class UserService{
    async createUser(user_name, password) {
        //插入数据
        // await 表达式 ： promise 对象的值
        const res = await User.create({ user_name, password })
        return res
    }
    async getUserInfo({ id , user_name, password }){
        const whereOpt = {}
        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        
        const res = await User.findOne({
            attributes: ['id', 'user_name', 'password'],
            where: whereOpt
        })
        return res ? res.dataValues : null
    }
    async updateById({ id, user_name, password }) {
        const whereOpt = { id }
        const newUser = {}
        user_name && Object.assign(newUser, {user_name})
        password && Object.assign(newUser, {password})
        const res = await User.update(newUser, { where: whereOpt })
        return res[0] > 0 ? true : false
    }
}
module.exports = new UserService()