const { mutationField, arg } = require('@nexus/schema')

const DynamicStatsUpdateOneMutation = mutationField('updateOneDynamicStats', {
  type: 'DynamicStats',
  nullable: false,
  args: {
    where: arg({
      type: 'DynamicStatsWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'DynamicStatsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.dynamicStats.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { DynamicStatsUpdateOneMutation }
