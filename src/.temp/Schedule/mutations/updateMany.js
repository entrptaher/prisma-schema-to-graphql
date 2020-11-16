const { mutationField, arg } = require('@nexus/schema')

const ScheduleUpdateManyMutation = mutationField('updateManySchedule', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ScheduleWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'ScheduleUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.schedule.updateMany(args)
  },
})
module.exports = { ScheduleUpdateManyMutation }
