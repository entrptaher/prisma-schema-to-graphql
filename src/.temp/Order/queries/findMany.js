const { queryField, arg } = require('@nexus/schema')

const OrderFindManyQuery = queryField('findManyOrder', {
  type: 'Order',
  list: [true],
  args: {
    where: 'OrderWhereInput',
    orderBy: arg({ type: 'OrderOrderByInput', list: true }),
    cursor: 'OrderWhereUniqueInput',
    distinct: 'OrderDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { OrderFindManyQuery }
