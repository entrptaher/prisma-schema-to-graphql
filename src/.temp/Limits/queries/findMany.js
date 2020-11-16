const { queryField, arg } = require('@nexus/schema')

const LimitsFindManyQuery = queryField('findManyLimits', {
  type: 'Limits',
  list: [true],
  args: {
    where: 'LimitsWhereInput',
    orderBy: arg({ type: 'LimitsOrderByInput', list: true }),
    cursor: 'LimitsWhereUniqueInput',
    distinct: 'LimitsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.limits.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { LimitsFindManyQuery }
