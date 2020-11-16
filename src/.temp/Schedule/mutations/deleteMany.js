const { mutationField, arg } = require('@nexus/schema')

const ScheduleDeleteManyMutation = mutationField('deleteManySchedule', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ScheduleWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.schedule.deleteMany({ where })
  },
})
module.exports = { ScheduleDeleteManyMutation }
