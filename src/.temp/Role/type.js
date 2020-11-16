const { objectType } = require('@nexus/schema')

const Role = objectType({
  name: 'Role',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('name', { nullable: false })
    t.string('slug', { nullable: false })
    t.int('level', { nullable: false })
    t.boolean('billable', { nullable: false })
    t.field('permissions', {
      nullable: false,
      list: [true],
      type: 'Permission',
      args: {
        where: 'PermissionWhereInput',
        orderBy: 'PermissionOrderByInput',
        cursor: 'PermissionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PermissionDistinctFieldEnum',
      },
      resolve(root) {
        return root.permissions
      },
    })
    t.field('User', {
      nullable: false,
      list: [true],
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserDistinctFieldEnum',
      },
      resolve(root) {
        return root.User
      },
    })
  },
})

module.exports = { Role }
