const { queryField, arg } = require('@nexus/schema')

const LimitsFindOneQuery = queryField('findOneLimits', {
  type: 'Limits',
  nullable: true,
  args: {
    where: arg({
      type: 'LimitsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.limits.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { LimitsFindOneQuery }
