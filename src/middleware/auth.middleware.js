const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default') 
const { tokenExpiredError, invalidToken } = require('../constants/err.type')
const auth = async (ctx, next) => {
    try {
        const { authorization } = ctx.request.header
        const token = authorization.replace('Bearer', '')
        // user包含payload的信息（id ,uer_name, is_admin）
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
    } catch (error) {
        switch(error.name) {
            case 'TokenExpiredError': 
              console.error('token已过期', error)
              ctx.app.emit('error', tokenExpiredError, ctx)
              return
            case 'JsonWebTokenError': 
              console.error('无效的token', error)
              ctx.app.emit('error', invalidToken, ctx)
              return
        }
    }
    await next()
}
module.exports = {
    auth
}