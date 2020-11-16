const { mutationField, arg } = require('@nexus/schema')

const LimitsUpdateOneMutation = mutationField('updateOneLimits', {
  type: 'Limits',
  nullable: false,
  args: {
    where: arg({
      type: 'LimitsWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'LimitsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.limits.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { LimitsUpdateOneMutation }
