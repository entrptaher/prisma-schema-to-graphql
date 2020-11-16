const { mutationField, arg } = require('@nexus/schema')

const LimitsUpdateManyMutation = mutationField('updateManyLimits', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'LimitsWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'LimitsUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.limits.updateMany(args)
  },
})
module.exports = { LimitsUpdateManyMutation }
