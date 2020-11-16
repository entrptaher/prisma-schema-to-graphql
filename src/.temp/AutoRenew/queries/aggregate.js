const { queryField, arg } = require('@nexus/schema')

const AutoRenewAggregateQuery = queryField('aggregateAutoRenew', {
  type: 'AggregateAutoRenew',
  nullable: true,
  args: {
    where: 'AutoRenewWhereInput',
    orderBy: arg({ type: 'AutoRenewOrderByInput', list: true }),
    cursor: 'AutoRenewWhereUniqueInput',
    distinct: 'AutoRenewDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.autoRenew.aggregate({ ...args, ...select })
  },
})
module.exports = { AutoRenewAggregateQuery }
