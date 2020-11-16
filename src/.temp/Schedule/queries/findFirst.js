const { queryField, arg } = require('@nexus/schema')

const ScheduleFindFirstQuery = queryField('findFirstSchedule', {
  type: 'Schedule',
  nullable: true,
  args: {
    where: 'ScheduleWhereInput',
    orderBy: arg({ type: 'ScheduleOrderByInput', list: true }),
    cursor: 'ScheduleWhereUniqueInput',
    distinct: 'ScheduleDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.schedule.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { ScheduleFindFirstQuery }
