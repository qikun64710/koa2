const router = require('koa-router')()
const uploadController = require('../controllers/admin/common')
router.post('/api/uploadimg',uploadController.uploadimg)

module.exports = router