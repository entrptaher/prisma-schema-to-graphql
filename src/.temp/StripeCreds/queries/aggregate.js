const { queryField, arg } = require('@nexus/schema')

const StripeCredsAggregateQuery = queryField('aggregateStripeCreds', {
  type: 'AggregateStripeCreds',
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
    return prisma.stripeCreds.aggregate({ ...args, ...select })
  },
})
module.exports = { StripeCredsAggregateQuery }
