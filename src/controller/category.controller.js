const { getCategoryList } = require('../service/category.service')

class CategoryController {
    async getCategoryList(ctx, next) {
        try {
            const res = await getCategoryList()
            ctx.body = {
                code: 200,
                message: '操作成功',
                result: res
            }
        } catch (error) {
            ctx.status = 400
            ctx.body = {
                code: 400,
                message: '操作失败',
                result: error
            }
        }
    }
}
module.exports = new CategoryController()