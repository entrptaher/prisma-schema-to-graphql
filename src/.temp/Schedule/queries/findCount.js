const { queryField, arg } = require('@nexus/schema')

const ScheduleFindCountQuery = queryField('findManyScheduleCount', {
  type: 'Int',
  args: {
    where: 'ScheduleWhereInput',
    orderBy: arg({ type: 'ScheduleOrderByInput', list: true }),
    cursor: 'ScheduleWhereUniqueInput',
    distinct: 'ScheduleDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.schedule.count(args)
  },
})
module.exports = { ScheduleFindCountQuery }
