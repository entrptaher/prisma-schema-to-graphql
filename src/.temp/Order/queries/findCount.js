const { queryField, arg } = require('@nexus/schema')

const OrderFindCountQuery = queryField('findManyOrderCount', {
  type: 'Int',
  args: {
    where: 'OrderWhereInput',
    orderBy: arg({ type: 'OrderOrderByInput', list: true }),
    cursor: 'OrderWhereUniqueInput',
    distinct: 'OrderDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.order.count(args)
  },
})
module.exports = { OrderFindCountQuery }
