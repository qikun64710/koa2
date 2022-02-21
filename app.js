// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
import Koa from 'koa';
// 创建一个Koa对象表示web app本身:
import bodyParser from 'koa-bodyparser'
import router from './router/index.js'

const app = new Koa();
app.use(bodyParser());

app.use(async function(ctx,next){
    try{
        await next()
    }catch(err){
        if(err.status === 400){
            ctx.status = 401
            ctx.body = {
                success:false,
                token:null,
                info:'没有权限'
            }
        }else{
            throw err
        }
    }
})
router(app)
app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})
// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     console.log(`process ${ctx.request.method} ${ctx.request.url}`)
//     await next();
// });
// // router.get('/hello/:name',async (ctx,next) => {
// //     console.log('ctx.params:',ctx.params)
// //     let name = ctx.params.name;
// //     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// // })
// // router.get('/', async( ctx,next) => {
// //     ctx.response.body = '<h1>Index</h1>';
// // })
// router.get('/', async (ctx, next) => {
//     ctx.response.body = `<h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// });
// router.post('/signin', async (ctx, next) => {
//     var
//         name = ctx.request.body.name || '',
//         password = ctx.request.body.password || '';
//     console.log(`signin with name: ${name}, password: ${password}`);
//     if (name === 'koa' && password === '12345') {
//         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//     } else {
//         ctx.response.body = `<h1>Login failed!</h1>
//         <p><a href="/">Try again</a></p>`;
//     }
// });

// app.use(router.routes())
// // 在端口3000监听:
// app.listen(3000);
// console.log('app started at port 3000...');