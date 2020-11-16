const { queryField, arg } = require('@nexus/schema')

const StripeCredsFindManyQuery = queryField('findManyStripeCreds', {
  type: 'StripeCreds',
  list: [true],
  args: {
    where: 'StripeCredsWhereInput',
    orderBy: arg({ type: 'StripeCredsOrderByInput', list: true }),
    cursor: 'StripeCredsWhereUniqueInput',
    distinct: 'StripeCredsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stripeCreds.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { StripeCredsFindManyQuery }
