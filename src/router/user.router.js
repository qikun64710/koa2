const Router = require('koa-router')
const { userValidator, userVerify, cryptPassword, verifyLogin } = require('../middleware/user.middleware')
const { auth } = require('../middleware/auth.middleware')
const { register, login, changePassword } = require('../controller/user.controller')

const router = new Router({prefix: '/users'})
// 注册
router.post('/register', userValidator, userVerify, cryptPassword, register)
// 登陆
router.post('/login', userValidator, verifyLogin, login)
// 修改密码
router.post('/updatePassword', auth, cryptPassword, changePassword)

module.exports = router