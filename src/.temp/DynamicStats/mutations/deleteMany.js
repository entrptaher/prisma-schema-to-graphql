const { mutationField, arg } = require('@nexus/schema')

const DynamicStatsDeleteManyMutation = mutationField('deleteManyDynamicStats', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'DynamicStatsWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.dynamicStats.deleteMany({ where })
  },
})
module.exports = { DynamicStatsDeleteManyMutation }
