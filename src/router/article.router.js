const Router = require('koa-router')
const {
    uploadImg,
    creatArticle,
    findAllArticle,
    upateArticle,
    findAndCountAll,
    findArticleId
} = require('../controller/article.controller')
const { auth } = require('../middleware/auth.middleware')


const router = new Router({prefix: '/article'})

// 上传图片
router.post('/uploadImg', auth, uploadImg)
// 创建文章
router.post('/createArticle', auth, creatArticle)
// 所有文章
router.post('/findAllArticle', findAllArticle)
// 修改文章
router.post('/upateArticle', auth, upateArticle)
// 根据 分类 分页
router.post('/findAndCountAll', findAndCountAll)
// 根据id查询文章
router.post('/findArticleId', findArticleId)





module.exports = router