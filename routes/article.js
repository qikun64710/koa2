const router = require('koa-router')()
const articleControle = require('../controllers/Article.js')

router.post('/api/article/findAndCountAll',articleControle.findAndCountAll)
router.post('/api/article/addArticle',articleControle.addArticle)

module.exports = router
