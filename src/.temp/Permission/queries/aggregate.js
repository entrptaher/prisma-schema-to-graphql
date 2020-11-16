const { queryField, arg } = require('@nexus/schema')

const PermissionAggregateQuery = queryField('aggregatePermission', {
  type: 'AggregatePermission',
  nullable: true,
  args: {
    where: 'PermissionWhereInput',
    orderBy: arg({ type: 'PermissionOrderByInput', list: true }),
    cursor: 'PermissionWhereUniqueInput',
    distinct: 'PermissionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.permission.aggregate({ ...args, ...select })
  },
})
module.exports = { PermissionAggregateQuery }
