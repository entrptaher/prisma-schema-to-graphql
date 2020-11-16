const { mutationField, arg } = require('@nexus/schema')

const IntervalsUpsertOneMutation = mutationField('upsertOneIntervals', {
  type: 'Intervals',
  nullable: false,
  args: {
    where: arg({
      type: 'IntervalsWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'IntervalsCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'IntervalsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.intervals.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { IntervalsUpsertOneMutation }
