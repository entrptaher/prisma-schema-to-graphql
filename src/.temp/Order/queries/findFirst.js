const { queryField, arg } = require('@nexus/schema')

const OrderFindFirstQuery = queryField('findFirstOrder', {
  type: 'Order',
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
    return prisma.order.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { OrderFindFirstQuery }
