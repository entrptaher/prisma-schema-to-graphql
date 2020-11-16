const { queryField, arg } = require('@nexus/schema')

const StripeCredsFindCountQuery = queryField('findManyStripeCredsCount', {
  type: 'Int',
  args: {
    where: 'StripeCredsWhereInput',
    orderBy: arg({ type: 'StripeCredsOrderByInput', list: true }),
    cursor: 'StripeCredsWhereUniqueInput',
    distinct: 'StripeCredsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.stripeCreds.count(args)
  },
})
module.exports = { StripeCredsFindCountQuery }
