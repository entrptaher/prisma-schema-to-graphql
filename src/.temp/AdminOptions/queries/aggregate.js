const { queryField, arg } = require('@nexus/schema')

const AdminOptionsAggregateQuery = queryField('aggregateAdminOptions', {
  type: 'AggregateAdminOptions',
  nullable: true,
  args: {
    where: 'AdminOptionsWhereInput',
    orderBy: arg({ type: 'AdminOptionsOrderByInput', list: true }),
    cursor: 'AdminOptionsWhereUniqueInput',
    distinct: 'AdminOptionsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.adminOptions.aggregate({ ...args, ...select })
  },
})
module.exports = { AdminOptionsAggregateQuery }
