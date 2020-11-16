const { queryField, arg } = require('@nexus/schema')

const RoleFindCountQuery = queryField('findManyRoleCount', {
  type: 'Int',
  args: {
    where: 'RoleWhereInput',
    orderBy: arg({ type: 'RoleOrderByInput', list: true }),
    cursor: 'RoleWhereUniqueInput',
    distinct: 'RoleDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.role.count(args)
  },
})
module.exports = { RoleFindCountQuery }
