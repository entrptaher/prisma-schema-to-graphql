const { queryField, arg } = require('@nexus/schema')

const StripeCredsFindFirstQuery = queryField('findFirstStripeCreds', {
  type: 'StripeCreds',
  nullable: true,
  args: {
    where: 'StripeCredsWhereInput',
    orderBy: arg({ type: 'StripeCredsOrderByInput', list: true }),
    cursor: 'StripeCredsWhereUniqueInput',
    distinct: 'StripeCredsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stripeCreds.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { StripeCredsFindFirstQuery }
