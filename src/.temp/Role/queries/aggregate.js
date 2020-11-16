const { queryField, arg } = require('@nexus/schema')

const RoleAggregateQuery = queryField('aggregateRole', {
  type: 'AggregateRole',
  nullable: true,
  args: {
    where: 'RoleWhereInput',
    orderBy: arg({ type: 'RoleOrderByInput', list: true }),
    cursor: 'RoleWhereUniqueInput',
    distinct: 'RoleDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.role.aggregate({ ...args, ...select })
  },
})
module.exports = { RoleAggregateQuery }
