const { queryField, arg } = require('@nexus/schema')

const IntervalsAggregateQuery = queryField('aggregateIntervals', {
  type: 'AggregateIntervals',
  nullable: true,
  args: {
    where: 'IntervalsWhereInput',
    orderBy: arg({ type: 'IntervalsOrderByInput', list: true }),
    cursor: 'IntervalsWhereUniqueInput',
    distinct: 'IntervalsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.intervals.aggregate({ ...args, ...select })
  },
})
module.exports = { IntervalsAggregateQuery }
