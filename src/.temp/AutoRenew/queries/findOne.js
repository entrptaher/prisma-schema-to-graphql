const { queryField, arg } = require('@nexus/schema')

const AutoRenewFindOneQuery = queryField('findOneAutoRenew', {
  type: 'AutoRenew',
  nullable: true,
  args: {
    where: arg({
      type: 'AutoRenewWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.autoRenew.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { AutoRenewFindOneQuery }
