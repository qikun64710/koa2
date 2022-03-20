import KoaRouter from 'koa-router'
import userController from '../controllers/user.js'
import categoryController from '../controllers/Category.js'

const router = KoaRouter()

export default  function  (app){
    // 用户部分
    router.post('/api/user/login',userController.login)
    router.post('/api/user/regist',userController.registe)
    // 分类部分
    router.post('/api/category/addCategory',categoryController.addCategory)
    router.post('/api/category/deleteCategory',categoryController.deleteCategory)
    router.post('/api/category/updateCategory',categoryController.updateCategory)
    router.get('/api/category/findAllCategory',categoryController.findAllCategory)
    router.get('/api/category/fuzzyFind',categoryController.fuzzyFind)
    // 文章部分
    
    app.use(router.routes()).use(router.allowedMethods())
}
