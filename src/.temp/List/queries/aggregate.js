const { queryField, arg } = require('@nexus/schema')

const ListAggregateQuery = queryField('aggregateList', {
  type: 'AggregateList',
  nullable: true,
  args: {
    where: 'ListWhereInput',
    orderBy: arg({ type: 'ListOrderByInput', list: true }),
    cursor: 'ListWhereUniqueInput',
    distinct: 'ListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.aggregate({ ...args, ...select })
  },
})
module.exports = { ListAggregateQuery }
