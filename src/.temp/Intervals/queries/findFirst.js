const { queryField, arg } = require('@nexus/schema')

const IntervalsFindFirstQuery = queryField('findFirstIntervals', {
  type: 'Intervals',
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
    return prisma.intervals.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { IntervalsFindFirstQuery }
