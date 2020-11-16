const { queryField, arg } = require('@nexus/schema')

const StateAggregateQuery = queryField('aggregateState', {
  type: 'AggregateState',
  nullable: true,
  args: {
    where: 'StateWhereInput',
    orderBy: arg({ type: 'StateOrderByInput', list: true }),
    cursor: 'StateWhereUniqueInput',
    distinct: 'StateDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.state.aggregate({ ...args, ...select })
  },
})
module.exports = { StateAggregateQuery }
