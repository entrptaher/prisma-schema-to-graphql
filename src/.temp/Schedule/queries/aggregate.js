const { queryField, arg } = require('@nexus/schema')

const ScheduleAggregateQuery = queryField('aggregateSchedule', {
  type: 'AggregateSchedule',
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
    return prisma.schedule.aggregate({ ...args, ...select })
  },
})
module.exports = { ScheduleAggregateQuery }
