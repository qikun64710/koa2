import user from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const login = async function(ctx,next){
    const data = ctx.request.query
    const userInfo = await user.getUserByName(data.user_name)
    if(userInfo){
        if(!bcrypt.compareSync(data.password,userInfo.dataValues.password)){ //验证密码是否正确
            ctx.response.body = {
                success: false,
                info:'密码错误'
            }
        }else{
            const userToken = {
                name:userInfo.user_name,
                id:userInfo.id
            }
            const secret = 'vue-koa-demo'
            const token = jwt.sign(userToken,secret)//签发token
            ctx.response.body = {
                success:true,
                token:token
            }
        }
    }else{
        ctx.response.body = {
            success:false,
            info:'用户不存在'
        }
    }
}
const registe = async function(ctx,next) {
    const data = ctx.request.query
    let { user_name,password } = data
    if(!user_name){
        ctx.response.body = {
            success:false,
            info:'用户名不能为空'
        }
        return
    }
    if(!password){
        ctx.response.body = {
            success:false,
            info:'密码不能为空'
        }
        return 
    }
    const regist_result = await user.registe(data)
    ctx.response.body = {
        success: true,
        info:regist_result
    }
}

export default {
    login,
    registe
}