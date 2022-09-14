const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const { 
    userFormateError,
    userAlreadyExited,
    userDoesNotExist,
    userLoginError,
    invalidPassword
} = require('../constants/err.type')
const userValidator = async (ctx, next) => {
    // 1. 获取数据
    const { user_name, password } = ctx.request.body
    // 合法性
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body)
        ctx.app.emit('error', userFormateError,ctx)
        return
    }
    await next()
} 
const userVerify = async (ctx, next) => {
    const { user_name } = ctx.request.body
    // 合理性
    try {
        const res = await getUserInfo({ user_name })
        if (res) {
            console.error('用户已存在', { user_name })
            ctx.app.emit('error', userAlreadyExited, ctx)
            return
        }
    } catch (error) {
        console.error('获取用户信息错误', error)
        ctx.app.emit('errror', userResgisterError, ctx)
        return
    }
    await next()
}
const cryptPassword = async (ctx, next ) => {
    const { password } = ctx.request.body
    const salt = bcrypt.genSaltSync(10)
    //  hash 保存的是密文
    const hash = bcrypt.hashSync(password, salt)
    ctx.request.body.password = hash
    await next()
}
const verifyLogin  = async (ctx, next) => {
    // 1. 根据用户名查数据库 判断用户是否存在（不存在：报错）
    try {
        const { user_name, password } = ctx.request.body
        const res = await getUserInfo({ user_name })
        if (!res) {
            console.error('用户不存在', { user_name })
            ctx.app.emit('error', userDoesNotExist, ctx)
            return
        }
        // 2、判断密码是否匹配（不匹配：报错）
        if (!bcrypt.compareSync(password, res.password)) {
            ctx.app.emit('error', invalidPassword, ctx)
            return
        }
    } catch (error) {
        console.error(error)
        ctx.app.emit('error', userLoginError, ctx)
        return
    }
    await next()
}
module.exports = {
    userValidator,
    userVerify,
    cryptPassword,
    verifyLogin
}