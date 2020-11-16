const { mutationField, arg } = require('@nexus/schema')

const ScheduleDeleteOneMutation = mutationField('deleteOneSchedule', {
  type: 'Schedule',
  nullable: true,
  args: {
    where: arg({
      type: 'ScheduleWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.schedule.delete({
      where,
      ...select,
    })
  },
})
module.exports = { ScheduleDeleteOneMutation }
