const { queryField, arg } = require('@nexus/schema')

const RetryAggregateQuery = queryField('aggregateRetry', {
  type: 'AggregateRetry',
  nullable: true,
  args: {
    where: 'RetryWhereInput',
    orderBy: arg({ type: 'RetryOrderByInput', list: true }),
    cursor: 'RetryWhereUniqueInput',
    distinct: 'RetryDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.retry.aggregate({ ...args, ...select })
  },
})
module.exports = { RetryAggregateQuery }
