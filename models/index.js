const Article = require('./article')
const ArticleType = require('./articleType')
const User = require('./user')
const Role = require('./role')
const Permission = require('./permission')
const RolePermission = require('./rolePermission')
const MenuList = require('./menuList')
const RoleMenuList = require('./roleMenuList')

ArticleType.hasMany(Article, { foreignKey: 'type' })
Article.belongsTo(ArticleType, { foreignKey: 'type' })

// 角色关联 多 对 多
MenuList.belongsToMany(Role, { through: RoleMenuList })
Role.belongsToMany(MenuList, { through: RoleMenuList })

User.belongsToMany(Role, {through: 'userRoles', as:'UserRoles'});
Role.belongsToMany(User, {through: 'userRoles', as:'UserRoles'});

// 多对多
MenuList.belongsToMany(Role, { through: RoleMenuList })
Role.belongsToMany(MenuList, { through: RoleMenuList })
// 多对多
Role.belongsToMany(Permission, { through: RolePermission })
Permission.belongsToMany(Role, { through: RolePermission })

module.exports = {
    Article,
    ArticleType,
    User,
    Role,
    Permission,
    RolePermission,
    MenuList,
    RoleMenuList
}

