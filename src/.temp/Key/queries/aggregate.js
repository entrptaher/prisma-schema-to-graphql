const { queryField, arg } = require('@nexus/schema')

const KeyAggregateQuery = queryField('aggregateKey', {
  type: 'AggregateKey',
  nullable: true,
  args: {
    where: 'KeyWhereInput',
    orderBy: arg({ type: 'KeyOrderByInput', list: true }),
    cursor: 'KeyWhereUniqueInput',
    distinct: 'KeyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.key.aggregate({ ...args, ...select })
  },
})
module.exports = { KeyAggregateQuery }
