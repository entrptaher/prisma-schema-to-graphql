const { queryField, arg } = require('@nexus/schema')

const StripeCredsFindOneQuery = queryField('findOneStripeCreds', {
  type: 'StripeCreds',
  nullable: true,
  args: {
    where: arg({
      type: 'StripeCredsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.stripeCreds.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { StripeCredsFindOneQuery }
