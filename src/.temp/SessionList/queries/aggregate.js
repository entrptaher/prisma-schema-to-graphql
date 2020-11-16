const { queryField, arg } = require('@nexus/schema')

const SessionListAggregateQuery = queryField('aggregateSessionList', {
  type: 'AggregateSessionList',
  nullable: true,
  args: {
    where: 'SessionListWhereInput',
    orderBy: arg({ type: 'SessionListOrderByInput', list: true }),
    cursor: 'SessionListWhereUniqueInput',
    distinct: 'SessionListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sessionList.aggregate({ ...args, ...select })
  },
})
module.exports = { SessionListAggregateQuery }
