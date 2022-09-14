const fs = require('fs')
const { createArticle, findAllArticle, upateArticle, findAndCountAll } = require('../service/article.service')
const uploadFile = require('../util/upload')
class ArticleControle {
    async uploadImg(ctx, next) {
        try {
            let file = ctx.request.files.file
            // 创建可读流
            let reader = fs.createReadStream(file.filepath)
            const fileName = file.originalFilename
            const cosRes = await uploadFile.putObject({
                key: `articleCover/${fileName}`,
                Body: reader
            })
            console.log('cosRescosRes:', cosRes)
            ctx.body = {
                msg:'文件上传成功',
                code:200,
                data:`https://${cosRes.Location}`
            }
            return
        } catch (error) {
            ctx.status = 400
            ctx.body = {
                msg:'文件上传失败'
            }
        }
        
    }
    async creatArticle(ctx, next) {
        const { title, banner, description, content, categoryList } = ctx.request.body
        try {
            await createArticle(title, banner, description, content, categoryList)
            ctx.body = {
                code: 200,
                message: '文章创建成功',
            }
        } catch (error) {
            ctx.status = 400
            ctx.body = {
                code: 400,
                message: '文章创建失败'
            }
        }
    }
    // 修改文章
    async upateArticle(ctx, next) {
        const { id, title, banner, description, content } = ctx.request.body

        try {
            const res = await upateArticle(id, title, banner, description, content)
            ctx.body = {
                code: 200,
                message: '操作成功',
                result: res
            }
            
        } catch (error) {
            ctx.status = 400
            ctx.body = {
                message: '操作失败',
                err: error
            }
        }
    }
    // 分页查询文章
    async findAndCountAll(ctx, next) {
        const { categoryId, page } = ctx.request.body
        const { pageSize, current } = page 
        try {
            const res = await findAndCountAll({ categoryId, pageSize, current })
            ctx.body = {
                message: '操作成功',
                result: res
            }
        } catch (error) {
            ctx.status = 400
            ctx.body = {
                message: '操作失败',
                result: error
            }
        }
    }
    // 查询全部文章
    async findAllArticle(ctx, next) {
        const { id } = ctx.request.body
        try {
            const res = await findAllArticle(id)
            ctx.body = {
                code: 200,
                message: '操作成功',
                result: res
            }
            
        } catch (error) {
            ctx.status = 400
            ctx.body = {
                message: '查询失败',
                err: error
            }
        }
    }
}

module.exports = new ArticleControle()