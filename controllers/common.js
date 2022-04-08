
const fs = require('fs')
const {cosUtil} = require('../util/upload')

const uploadimg = async function(ctx,next){
    let file = ctx.request.files.file
    let fileType = file.type
    let {type} = ctx.request.body
    //type = 1 封面，2 文章内容里面的图片
    let uppath = file.path
    // 创建可读流
    let reader = fs.createReadStream(uppath);

    // md5加密
    let newFilename = file.name;
    // let newFilename = smallFileMd5(uppath) + '.' + file.name.split('.')[1];
    cosUtil.init();
    let cosResult = await cosUtil.putObject({
        key:`articleCover/${newFilename}`,
        buffer: reader,
        fileType:fileType
    })
    if(cosResult.statusCode == 200){
        ctx.response.body = {
            success:true,
            code:200,
            info:cosResult
        }
        return
    }
    ctx.response.body = {
        success:false,
        info:'文件上传失败',
        data:cosResult
    }
}
module.exports = {
    uploadimg
}