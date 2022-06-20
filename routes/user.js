const router = require('koa-router')()
const user = require('../controllers/admin/user.js')

// 登陆
router.post('/api/user/login',user.login);
// 注册
router.post('/api/user/registe',user.userRegiste);

module.exports = router
