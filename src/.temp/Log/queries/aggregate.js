const { queryField, arg } = require('@nexus/schema')

const LogAggregateQuery = queryField('aggregateLog', {
  type: 'AggregateLog',
  nullable: true,
  args: {
    where: 'LogWhereInput',
    orderBy: arg({ type: 'LogOrderByInput', list: true }),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.log.aggregate({ ...args, ...select })
  },
})
module.exports = { LogAggregateQuery }
