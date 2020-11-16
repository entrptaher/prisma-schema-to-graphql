const { queryField, arg } = require('@nexus/schema')

const LimitsAggregateQuery = queryField('aggregateLimits', {
  type: 'AggregateLimits',
  nullable: true,
  args: {
    where: 'LimitsWhereInput',
    orderBy: arg({ type: 'LimitsOrderByInput', list: true }),
    cursor: 'LimitsWhereUniqueInput',
    distinct: 'LimitsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.limits.aggregate({ ...args, ...select })
  },
})
module.exports = { LimitsAggregateQuery }
