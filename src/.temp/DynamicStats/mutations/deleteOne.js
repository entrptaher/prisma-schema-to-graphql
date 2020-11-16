const { mutationField, arg } = require('@nexus/schema')

const DynamicStatsDeleteOneMutation = mutationField('deleteOneDynamicStats', {
  type: 'DynamicStats',
  nullable: true,
  args: {
    where: arg({
      type: 'DynamicStatsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.dynamicStats.delete({
      where,
      ...select,
    })
  },
})
module.exports = { DynamicStatsDeleteOneMutation }
