const { queryField, arg } = require('@nexus/schema')

const ScheduleFindOneQuery = queryField('findOneSchedule', {
  type: 'Schedule',
  nullable: true,
  args: {
    where: arg({
      type: 'ScheduleWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.schedule.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { ScheduleFindOneQuery }
