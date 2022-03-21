const router = require('koa-router')()
const articleControle = require('../controllers/Article.js')

router.post('/api/article/findAndCountAll',articleControle.findAndCountAll)

module.exports = router
