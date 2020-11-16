const { mutationField, arg } = require('@nexus/schema')

const ScheduleUpsertOneMutation = mutationField('upsertOneSchedule', {
  type: 'Schedule',
  nullable: false,
  args: {
    where: arg({
      type: 'ScheduleWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'ScheduleCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'ScheduleUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.schedule.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { ScheduleUpsertOneMutation }
