const { mutationField, arg } = require('@nexus/schema')

const IntervalsDeleteOneMutation = mutationField('deleteOneIntervals', {
  type: 'Intervals',
  nullable: true,
  args: {
    where: arg({
      type: 'IntervalsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.intervals.delete({
      where,
      ...select,
    })
  },
})
module.exports = { IntervalsDeleteOneMutation }
