const { queryField, arg } = require('@nexus/schema')

const PreservedDataAggregateQuery = queryField('aggregatePreservedData', {
  type: 'AggregatePreservedData',
  nullable: true,
  args: {
    where: 'PreservedDataWhereInput',
    orderBy: arg({ type: 'PreservedDataOrderByInput', list: true }),
    cursor: 'PreservedDataWhereUniqueInput',
    distinct: 'PreservedDataDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.preservedData.aggregate({ ...args, ...select })
  },
})
module.exports = { PreservedDataAggregateQuery }
