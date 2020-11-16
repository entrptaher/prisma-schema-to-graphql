const { queryField, arg } = require('@nexus/schema')

const DynamicStatsFindCountQuery = queryField('findManyDynamicStatsCount', {
  type: 'Int',
  args: {
    where: 'DynamicStatsWhereInput',
    orderBy: arg({ type: 'DynamicStatsOrderByInput', list: true }),
    cursor: 'DynamicStatsWhereUniqueInput',
    distinct: 'DynamicStatsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.dynamicStats.count(args)
  },
})
module.exports = { DynamicStatsFindCountQuery }
