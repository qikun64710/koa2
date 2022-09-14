const Router = require('koa-router')

const { auth } = require('../middleware/auth.middleware')
const { getCategoryList } = require('../controller/category.controller')

const router = new Router({prefix: '/category'})
router.post('/list', auth, getCategoryList)

module.exports = router