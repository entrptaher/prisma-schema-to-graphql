const { mutationField, arg } = require('@nexus/schema')

const LimitsDeleteManyMutation = mutationField('deleteManyLimits', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'LimitsWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.limits.deleteMany({ where })
  },
})
module.exports = { LimitsDeleteManyMutation }
