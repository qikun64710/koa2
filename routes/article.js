const router = require('koa-router')()
const articleControle = require('../controllers/admin/article')

// 分页查询
router.post('/api/article/findAndCountAll',articleControle.findAndCountAll);
// 添加文章
router.post('/api/article/addArticle',articleControle.addArticle);
// 根据id查询
router.post('/api/article/findArticle',articleControle.findArticle);


module.exports = router
