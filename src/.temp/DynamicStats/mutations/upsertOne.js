const { mutationField, arg } = require('@nexus/schema')

const DynamicStatsUpsertOneMutation = mutationField('upsertOneDynamicStats', {
  type: 'DynamicStats',
  nullable: false,
  args: {
    where: arg({
      type: 'DynamicStatsWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'DynamicStatsCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'DynamicStatsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.dynamicStats.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { DynamicStatsUpsertOneMutation }
