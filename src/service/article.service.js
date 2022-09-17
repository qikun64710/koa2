const Seq = require('../db/seq')
const Article = require('../model/article.model')
const ArticleCategory = require('../model/article_category.model')

class ArticleService {
    // 创建文章
    async createArticle(title, banner, description, content, categoryList) {
        const t = await Seq.sequelize.transaction()
        try {
            const res = await Article.create(
                {title, banner, description, content},
                { transaction: t }
            )
            const categoryIdList = []
            categoryList.forEach(m => {
                let obj = {
                    categoryId: m,
                    articleId: res.id
                }
                categoryIdList.push(obj)
            })
            await ArticleCategory.bulkCreate(categoryIdList,
                { transaction: t }
            ) 
            // 提交事务
            await t.commit()
            return true
        } catch (error) {
            await t.rollback()
            return false
        }

    }
    // 修改文章
    async upateArticle(id, title, banner, description, content) {
        const t = await Seq.sequelize.transaction()
        try {
            await Article.update(
                { title, banner, description, content },
                {
                    transaction: t,
                    where: {
                        id
                    }
                }
            )
            // 提交事务
            await t.commit()
            return true
        } catch (error) {
            await t.rollback()
            return false
        }
    }
    // 查询全部
    async findAllArticle({ pageSize = 10, current = 1 }) {
        const list = await Seq.select(
            'SELECT * from koa_article limit ? OFFSET ?' ,
            [pageSize, (current - 1) * pageSize]
        )
        const res = await Seq.select(
            'SELECT count(*) as total from koa_article'
        )
        const data = {
            list,
            page: {
                current,
                pageSize,
                total: res[0].total,
                totalPage: Math.ceil( res[0].total / pageSize )
            }

        }
        return data
    }
    // 根据id查找文章
    async findArticleId(id) {
        const res = await Seq.select(
            'SELECT * from koa_article where id = ?',
            [ id ]
        )
        return res[0]
    }
    // 带分页的查询文章
    async findAndCountAll({categoryId, pageSize, current}) {
        const list = await Seq.select(
            'SELECT a.*, c.id as categoryId FROM koa_category c INNER JOIN koa_article_category ac ON ac.categoryId = c.id \
            LEFT JOIN koa_article a ON a.id = ac.articleId where categoryId = ? limit ? OFFSET ?',
            [categoryId, pageSize, (current - 1) * pageSize]
        )
        const res = await Seq.select(
            'SELECT count(*) as total FROM koa_category c INNER JOIN koa_article_category ac ON ac.categoryId = c.id \
            LEFT JOIN koa_article a ON a.id = ac.articleId where categoryId = ?',
            [categoryId]
        )
        const data = {
            list,
            page: {
                current,
                pageSize,
                total: res[0].total,
                totalPage: Math.ceil( res[0].total / pageSize )
            }

        }
        return data
    }
    async findAllArticlePage(page, category) {
        
    }
}
module.exports = new ArticleService()