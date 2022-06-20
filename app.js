const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const koaBody = require('koa-body')
const cors = require('koa2-cors')

const article = require('./routes/article')
const user = require('./routes/user')
const category = require('./routes/category')
const uploadImg = require('./routes/common')



app.use(cors());

// error handler
onerror(app)

// middlewa
app.use(koaBody({
    multipart:true,
}))

// routes
app.use(user.routes(), user.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(uploadImg.routes(), uploadImg.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
