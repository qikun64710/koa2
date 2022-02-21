export default function user (sequelize,DataTypes){
    return sequelize.dfine('user',{
        id:{
            type:DataTypes.INTEGER(11),//字段类型
            primaryKey:true,//主键
            autoIncrement:true,//是否自增
        },
        user_name:{
            type:DataTypes.char(50),//最大长度为50的字符串
            allowNull:false
        },
        password:{
            type:DataTypes.char(32),
            allowNull:false
        }
    },{
        tableName: 'user'
      })
}