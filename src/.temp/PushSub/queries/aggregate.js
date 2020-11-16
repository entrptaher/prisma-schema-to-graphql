const { queryField, arg } = require('@nexus/schema')

const PushSubAggregateQuery = queryField('aggregatePushSub', {
  type: 'AggregatePushSub',
  nullable: true,
  args: {
    where: 'PushSubWhereInput',
    orderBy: arg({ type: 'PushSubOrderByInput', list: true }),
    cursor: 'PushSubWhereUniqueInput',
    distinct: 'PushSubDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.pushSub.aggregate({ ...args, ...select })
  },
})
module.exports = { PushSubAggregateQuery }
