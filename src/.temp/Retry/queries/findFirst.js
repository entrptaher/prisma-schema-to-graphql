const { queryField, arg } = require('@nexus/schema')

const RetryFindFirstQuery = queryField('findFirstRetry', {
  type: 'Retry',
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
    return prisma.retry.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { RetryFindFirstQuery }
