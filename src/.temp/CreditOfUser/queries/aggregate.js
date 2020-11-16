const { queryField, arg } = require('@nexus/schema')

const CreditOfUserAggregateQuery = queryField('aggregateCreditOfUser', {
  type: 'AggregateCreditOfUser',
  nullable: true,
  args: {
    where: 'CreditOfUserWhereInput',
    orderBy: arg({ type: 'CreditOfUserOrderByInput', list: true }),
    cursor: 'CreditOfUserWhereUniqueInput',
    distinct: 'CreditOfUserDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditOfUser.aggregate({ ...args, ...select })
  },
})
module.exports = { CreditOfUserAggregateQuery }
