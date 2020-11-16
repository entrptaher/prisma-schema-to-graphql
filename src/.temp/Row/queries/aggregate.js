const { queryField, arg } = require('@nexus/schema')

const RowAggregateQuery = queryField('aggregateRow', {
  type: 'AggregateRow',
  nullable: true,
  args: {
    where: 'RowWhereInput',
    orderBy: arg({ type: 'RowOrderByInput', list: true }),
    cursor: 'RowWhereUniqueInput',
    distinct: 'RowDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.row.aggregate({ ...args, ...select })
  },
})
module.exports = { RowAggregateQuery }
