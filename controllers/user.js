let {getUserByName,registe} = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs')
const path = require('path')

const login = async function(ctx,next){
    const data = ctx.request.query
    const userInfo = await getUserByName(data.name)
    if(userInfo){
        if(!bcrypt.compareSync(data.password,userInfo.dataValues.password)){ //验证密码是否正确
            ctx.response.body = {
                success: false,
                info:'密码错误'
            }
        }else{
            const userToken = {
                name:userInfo.name,
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
const userRegiste = async function(ctx,next) {
    const data = ctx.request.query
    let { name,password } = data
    if(!name){
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
    const regist_result = await registe(data)
    ctx.response.body = {
        success: true,
        info:regist_result
    }
}
const uploadImg = async function(ctx,next){
    console.log(3333)
    // 上传单个文件
    console.log('file===:',ctx.request.files)
    const file = ctx.request.files.file //获取文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname,'../public/upload'+`/${file.path}`)
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    reader.pipe(upStream);
    ctx.response.body = {
        success: true,
        cood:200,
        info:'图片成功'
    }
}
module.exports = {
    login,
    userRegiste,
    uploadImg
}