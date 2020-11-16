const { queryField, arg } = require('@nexus/schema')

const IntervalsFindManyQuery = queryField('findManyIntervals', {
  type: 'Intervals',
  list: [true],
  args: {
    where: 'IntervalsWhereInput',
    orderBy: arg({ type: 'IntervalsOrderByInput', list: true }),
    cursor: 'IntervalsWhereUniqueInput',
    distinct: 'IntervalsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.intervals.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { IntervalsFindManyQuery }
