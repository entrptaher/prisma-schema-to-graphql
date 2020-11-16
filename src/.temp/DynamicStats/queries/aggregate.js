const { queryField, arg } = require('@nexus/schema')

const DynamicStatsAggregateQuery = queryField('aggregateDynamicStats', {
  type: 'AggregateDynamicStats',
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
    return prisma.dynamicStats.aggregate({ ...args, ...select })
  },
})
module.exports = { DynamicStatsAggregateQuery }
