const fs = require('fs')
const path = require('path')
console.log(22222)
const uploadImg = async function(ctx,next){
    // 上传单个文件
    console.log("=========",ctx.request.files.file)
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
        info:'图片上传成功'
    }
}
module.exports = {
    uploadImg
}
