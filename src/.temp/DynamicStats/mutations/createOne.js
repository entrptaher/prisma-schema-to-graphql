const { mutationField, arg } = require('@nexus/schema')

const DynamicStatsCreateOneMutation = mutationField('createOneDynamicStats', {
  type: 'DynamicStats',
  nullable: false,
  args: {
    data: arg({
      type: 'DynamicStatsCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.dynamicStats.create({
      data,
      ...select,
    })
  },
})
module.exports = { DynamicStatsCreateOneMutation }
