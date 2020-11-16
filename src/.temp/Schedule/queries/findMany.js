const { queryField, arg } = require('@nexus/schema')

const ScheduleFindManyQuery = queryField('findManySchedule', {
  type: 'Schedule',
  list: [true],
  args: {
    where: 'ScheduleWhereInput',
    orderBy: arg({ type: 'ScheduleOrderByInput', list: true }),
    cursor: 'ScheduleWhereUniqueInput',
    distinct: 'ScheduleDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.schedule.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { ScheduleFindManyQuery }
