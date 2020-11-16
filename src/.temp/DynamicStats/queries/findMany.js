const { queryField, arg } = require('@nexus/schema')

const DynamicStatsFindManyQuery = queryField('findManyDynamicStats', {
  type: 'DynamicStats',
  list: [true],
  args: {
    where: 'DynamicStatsWhereInput',
    orderBy: arg({ type: 'DynamicStatsOrderByInput', list: true }),
    cursor: 'DynamicStatsWhereUniqueInput',
    distinct: 'DynamicStatsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dynamicStats.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { DynamicStatsFindManyQuery }
