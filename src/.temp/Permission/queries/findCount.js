const { queryField, arg } = require('@nexus/schema')

const PermissionFindCountQuery = queryField('findManyPermissionCount', {
  type: 'Int',
  args: {
    where: 'PermissionWhereInput',
    orderBy: arg({ type: 'PermissionOrderByInput', list: true }),
    cursor: 'PermissionWhereUniqueInput',
    distinct: 'PermissionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.permission.count(args)
  },
})
module.exports = { PermissionFindCountQuery }
