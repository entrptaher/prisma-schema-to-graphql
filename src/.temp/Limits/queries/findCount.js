const { queryField, arg } = require('@nexus/schema')

const LimitsFindCountQuery = queryField('findManyLimitsCount', {
  type: 'Int',
  args: {
    where: 'LimitsWhereInput',
    orderBy: arg({ type: 'LimitsOrderByInput', list: true }),
    cursor: 'LimitsWhereUniqueInput',
    distinct: 'LimitsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.limits.count(args)
  },
})
module.exports = { LimitsFindCountQuery }
