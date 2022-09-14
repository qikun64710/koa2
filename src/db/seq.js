const { Sequelize, DataTypes, QueryTypes } = require('sequelize')
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB
} = require('../config/config.default')
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect:'mysql',
    define: {
        freezeTableName: true, //强制表名等于模型名称
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
})
class Seq {
    sequelize = seq
  // insert 添加
    async insert(sql, replacements = {}) {
      const res = await seq.query(
        sql,
        {
          replacements: replacements,
          raw: false,
          type: QueryTypes.INSERT
        }
      )
      return res
    }
    // update
    async update(sql, replacements = {}) {
      const res = await seq.query(
        sql,
        {
          replacements: replacements,
          raw: false,
          type: QueryTypes.UPDATE
        }
      )
      return res
    }
    // delete
    async delete(sql, replacements = {}) {
      const res = await seq.query(
        sql,
        {
          replacements: replacements,
          raw: false,
          type: QueryTypes.DELETE
        }
      )
      return res
    }
    // select
    async select(sql, replacements = {}) {
      const res = await seq.query(
        sql,
        {
          replacements: replacements,
          raw: false,
          type: QueryTypes.SELECT
        }
      )
      return res
    }
    sync(){
      if(process.env.NODE_ENV !== 'production'){
        seq.sync({force:true})
      }else{
        throw new Error('connot sync() when NODE_ENV is set to \'producton\'.')
      }
    }
    defineModel(name, attributes) {
        var attrs = {}
        for (let key in attributes) {
            let item = attributes[key]
            if (typeof item === 'object' && item['type']) {
                item.allowNull = item.allowNull || true
                attrs[key] = item
            }
        }
        attrs.createdAt = {
            type: DataTypes.BIGINT,
            allowNull: true
        }
        attrs.updatedAt = {
            type: DataTypes.BIGINT,
            allowNull: true
        }
        const model = seq.define(name, attrs, { 
            hooks:{
                beforeValidate:function(obj){
                  let now = Date.now();
                  if(obj.isNewRecord){
                    obj.createdAt = now;
                    obj.updatedAt = now;
                  }else{
                    obj.updatedAt = now;
                  }
                },
                beforeBulkCreate:(modelArr,optons)=>{
                  let now = Date.now();
                  for(const member of modelArr){
                    if(member.isNewRecord){
                      member.createdAt = now;
                      member.updatedAt = now;
                    }
                  }
                }
            }
        })
        return model
    }
}
// seq.authenticate().then(() => {
//     console.log('数据连接成功')
// }).catch(err => {
//     console.log('数据库连接失败：', err)
// })
module.exports = new Seq()