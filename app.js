const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const koaBody = require('koa-body')

const article = require('./routes/article')
const user = require('./routes/user')
const category = require('./routes/category')
const uploadImg = require('./routes/common')



// error handler
onerror(app)

// middlewa
app.use(koaBody({
    multipart:true,
}))


// routes
app.use(article.routes(), article.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(uploadImg.routes(), uploadImg.allowedMethods())
app.use(user.routes(), user.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
