const { mutationField, arg } = require('@nexus/schema')

const DynamicStatsUpdateManyMutation = mutationField('updateManyDynamicStats', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'DynamicStatsWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'DynamicStatsUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.dynamicStats.updateMany(args)
  },
})
module.exports = { DynamicStatsUpdateManyMutation }
