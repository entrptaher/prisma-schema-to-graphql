const { queryField, arg } = require('@nexus/schema')

const RetryFindCountQuery = queryField('findManyRetryCount', {
  type: 'Int',
  args: {
    where: 'RetryWhereInput',
    orderBy: arg({ type: 'RetryOrderByInput', list: true }),
    cursor: 'RetryWhereUniqueInput',
    distinct: 'RetryDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.retry.count(args)
  },
})
module.exports = { RetryFindCountQuery }
