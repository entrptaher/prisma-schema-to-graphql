const { mutationField, arg } = require('@nexus/schema')

const ScheduleCreateOneMutation = mutationField('createOneSchedule', {
  type: 'Schedule',
  nullable: false,
  args: {
    data: arg({
      type: 'ScheduleCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.schedule.create({
      data,
      ...select,
    })
  },
})
module.exports = { ScheduleCreateOneMutation }
