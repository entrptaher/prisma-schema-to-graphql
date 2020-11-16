const { queryField, arg } = require('@nexus/schema')

const OrderAggregateQuery = queryField('aggregateOrder', {
  type: 'AggregateOrder',
  nullable: true,
  args: {
    where: 'OrderWhereInput',
    orderBy: arg({ type: 'OrderOrderByInput', list: true }),
    cursor: 'OrderWhereUniqueInput',
    distinct: 'OrderDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.aggregate({ ...args, ...select })
  },
})
module.exports = { OrderAggregateQuery }
