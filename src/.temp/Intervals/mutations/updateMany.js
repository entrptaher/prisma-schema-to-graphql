const { mutationField, arg } = require('@nexus/schema')

const IntervalsUpdateManyMutation = mutationField('updateManyIntervals', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'IntervalsWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'IntervalsUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.intervals.updateMany(args)
  },
})
module.exports = { IntervalsUpdateManyMutation }
