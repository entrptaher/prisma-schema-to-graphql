const { mutationField, arg } = require('@nexus/schema')

const LimitsDeleteOneMutation = mutationField('deleteOneLimits', {
  type: 'Limits',
  nullable: true,
  args: {
    where: arg({
      type: 'LimitsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.limits.delete({
      where,
      ...select,
    })
  },
})
module.exports = { LimitsDeleteOneMutation }
