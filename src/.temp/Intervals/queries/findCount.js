const { queryField, arg } = require('@nexus/schema')

const IntervalsFindCountQuery = queryField('findManyIntervalsCount', {
  type: 'Int',
  args: {
    where: 'IntervalsWhereInput',
    orderBy: arg({ type: 'IntervalsOrderByInput', list: true }),
    cursor: 'IntervalsWhereUniqueInput',
    distinct: 'IntervalsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.intervals.count(args)
  },
})
module.exports = { IntervalsFindCountQuery }
