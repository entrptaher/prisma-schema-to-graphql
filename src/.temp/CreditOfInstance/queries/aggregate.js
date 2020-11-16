const { queryField, arg } = require('@nexus/schema')

const CreditOfInstanceAggregateQuery = queryField('aggregateCreditOfInstance', {
  type: 'AggregateCreditOfInstance',
  nullable: true,
  args: {
    where: 'CreditOfInstanceWhereInput',
    orderBy: arg({ type: 'CreditOfInstanceOrderByInput', list: true }),
    cursor: 'CreditOfInstanceWhereUniqueInput',
    distinct: 'CreditOfInstanceDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditOfInstance.aggregate({ ...args, ...select })
  },
})
module.exports = { CreditOfInstanceAggregateQuery }
