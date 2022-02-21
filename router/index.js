import KoaRouter from 'koa-router'
import userController from '../controllers/user.js'
import jwt from 'koa-jwt'
const router = KoaRouter()

export default  function  (app){
    router.post('/user/login',userController.login)
    app.use(router.routes()).use(router.allowedMethods())
}
