const { queryField, arg } = require('@nexus/schema')

const SessionAggregateQuery = queryField('aggregateSession', {
  type: 'AggregateSession',
  nullable: true,
  args: {
    where: 'SessionWhereInput',
    orderBy: arg({ type: 'SessionOrderByInput', list: true }),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.session.aggregate({ ...args, ...select })
  },
})
module.exports = { SessionAggregateQuery }
