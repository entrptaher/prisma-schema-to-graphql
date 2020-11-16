const { queryField, arg } = require('@nexus/schema')

const ProxyAggregateQuery = queryField('aggregateProxy', {
  type: 'AggregateProxy',
  nullable: true,
  args: {
    where: 'ProxyWhereInput',
    orderBy: arg({ type: 'ProxyOrderByInput', list: true }),
    cursor: 'ProxyWhereUniqueInput',
    distinct: 'ProxyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.proxy.aggregate({ ...args, ...select })
  },
})
module.exports = { ProxyAggregateQuery }
