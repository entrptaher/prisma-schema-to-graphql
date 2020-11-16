const { mutationField, arg } = require('@nexus/schema')

const IntervalsDeleteManyMutation = mutationField('deleteManyIntervals', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'IntervalsWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.intervals.deleteMany({ where })
  },
})
module.exports = { IntervalsDeleteManyMutation }
