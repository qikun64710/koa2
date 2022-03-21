const router = require('koa-router')()
const user = require('../controllers/User.js')

router.post('/api/user/login',user.login)
router.post('/api/user/registe',user.userRegiste)

module.exports = router
