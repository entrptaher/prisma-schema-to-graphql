const { queryField, arg } = require('@nexus/schema')

const DynamicStatsFindFirstQuery = queryField('findFirstDynamicStats', {
  type: 'DynamicStats',
  nullable: true,
  args: {
    where: 'DynamicStatsWhereInput',
    orderBy: arg({ type: 'DynamicStatsOrderByInput', list: true }),
    cursor: 'DynamicStatsWhereUniqueInput',
    distinct: 'DynamicStatsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dynamicStats.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { DynamicStatsFindFirstQuery }
