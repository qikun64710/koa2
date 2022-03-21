const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require('./config.js');
const uuid = require('node-uuid');

function generateId() {
  return uuid.v4();
}

const sequelize = new Sequelize(config.database,config.username,config.password,{
  host:config.host,
  dialect:config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
const ID_TYPE = DataTypes.STRING(50);
function defineModel(name,attributes){
  var attrs = {};
  attrs.id = {
    type:DataTypes.INTEGER(11),
    primaryKey:true,
    autoIncrement:true,//是否自增
  };
  for(let key in attributes){
    let value = attributes[key];
    if(typeof value === 'object' && value['type']){
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    }else{
      attrs[key] = {
        type:value,
        allowNull:false
      }
    }
  }
  attrs.createAt = {
    type: DataTypes.BIGINT,
    allowNull: false
  };
  attrs.updateAt = {
    type:DataTypes.BIGINT,
    allowNull:false
  };
  attrs.version = {
    type:DataTypes.BIGINT,
    allowNull:false
  };
  class model extends Model{}
  model.init(
    attrs,
    {
      sequelize,
      tableName:name,
      modelName:name,
      timestamps:false,
      hooks:{
        beforeValidate:function(obj){
          let now = Date.now();
          if(obj.isNewRecord){
            console.log('will create entity...' + obj);
            obj.createAt = now;
            obj.updateAt = now;
            obj.version = 0;
          }else{
            console.log('will update entity....');
            obj.updateAt = now;
            obj.version++;
          }
        }
      }
    }
  )
  return model;
}
const TYPES = ['STRING','INTEGER','BINGINT','TEXT','DOUBLE','DATEONLY','BOOLEAN'];
var exp = {
  defineModel:defineModel,
  sync:()=>{
    if(process.env.NODE_ENV !== 'production'){
      sequelize.sync({force:true})
    }else{
      throw new Error('connot sync() when NODE_ENV is set to \'producton\'.')
    }
  }
};
for (let type of TYPES){
  exp[type] = DataTypes[type]
}
exp.ID = ID_TYPE;
exp.generateId = generateId;
module.exports = exp;