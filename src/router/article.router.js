const Router = require('koa-router')
const { uploadImg, creatArticle, findAllArticle, upateArticle, findAndCountAll} = require('../controller/article.controller')
const { auth } = require('../middleware/auth.middleware')


const router = new Router({prefix: '/article'})

router.post('/uploadImg', auth, uploadImg)
router.post('/createArticle', auth, creatArticle)
router.post('/findAllArticle', auth, findAllArticle)
router.post('/upateArticle', auth, upateArticle)
router.post('/findAndCountAll', auth, findAndCountAll)




module.exports = router