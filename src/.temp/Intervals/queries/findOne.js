const { queryField, arg } = require('@nexus/schema')

const IntervalsFindOneQuery = queryField('findOneIntervals', {
  type: 'Intervals',
  nullable: true,
  args: {
    where: arg({
      type: 'IntervalsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.intervals.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { IntervalsFindOneQuery }
