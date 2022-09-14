const Seq = require('../db/seq')
const Category = require('../model/category.model')

class CategoryService {
    async getCategoryList() {
        const res = Category.findAll()
        return res
    }
}
module.exports = new CategoryService()
