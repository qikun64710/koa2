const router = require('koa-router')()
const categoryController = require('../controllers/admin/category.js')

// 添加分类
router.post('/api/category/addCategory',categoryController.category_addCategory);
router.post('/api/category/deleteCategory',categoryController.category_deleteCategory);
router.post('/api/category/updateCategory',categoryController.category_updateCategory);
router.post('/api/category/findAllCategory',categoryController.category_findAllCategory);
router.post('/api/category/fuzzyFind',categoryController.category_fuzzyFind);

module.exports = router
