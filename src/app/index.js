const Koa = require('koa')
const KoaBody = require('koa-body')
const cors = require('koa2-cors')

const errHandler = require('./errHandler')

const userRouter = require('../router/user.router')
const articleRouter = require('../router/article.router')
const categoryRouter = require('../router/category.router')

const app = new Koa()
app.use(cors())
app.use(KoaBody({
    multipart: true
}))
app.use(userRouter.routes())
app.use(articleRouter.routes())
app.use(categoryRouter.routes())


// 统一的错误处理
app.on('error', errHandler)
module.exports = app