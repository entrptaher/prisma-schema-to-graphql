const { queryField, arg } = require('@nexus/schema')

const LimitsFindFirstQuery = queryField('findFirstLimits', {
  type: 'Limits',
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
    return prisma.limits.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { LimitsFindFirstQuery }
