const { queryField, arg } = require('@nexus/schema')

const RetryFindManyQuery = queryField('findManyRetry', {
  type: 'Retry',
  list: [true],
  args: {
    where: 'RetryWhereInput',
    orderBy: arg({ type: 'RetryOrderByInput', list: true }),
    cursor: 'RetryWhereUniqueInput',
    distinct: 'RetryDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.retry.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { RetryFindManyQuery }
