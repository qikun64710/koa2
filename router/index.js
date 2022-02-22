import KoaRouter from 'koa-router'
import userController from '../controllers/user.js'
const router = KoaRouter()

export default  function  (app){
    router.post('/api/user/login',userController.login)
    router.post('/api/user/regist',userController.registe)
    app.use(router.routes()).use(router.allowedMethods())
}
