const { queryField, arg } = require('@nexus/schema')

const DynamicStatsFindOneQuery = queryField('findOneDynamicStats', {
  type: 'DynamicStats',
  nullable: true,
  args: {
    where: arg({
      type: 'DynamicStatsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.dynamicStats.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { DynamicStatsFindOneQuery }
