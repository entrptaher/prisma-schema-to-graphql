const { mutationField, arg } = require('@nexus/schema')

const ScheduleUpdateOneMutation = mutationField('updateOneSchedule', {
  type: 'Schedule',
  nullable: false,
  args: {
    where: arg({
      type: 'ScheduleWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'ScheduleUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.schedule.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { ScheduleUpdateOneMutation }
