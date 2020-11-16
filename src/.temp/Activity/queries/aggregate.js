const { queryField, arg } = require('@nexus/schema')

const ActivityAggregateQuery = queryField('aggregateActivity', {
  type: 'AggregateActivity',
  nullable: true,
  args: {
    where: 'ActivityWhereInput',
    orderBy: arg({ type: 'ActivityOrderByInput', list: true }),
    cursor: 'ActivityWhereUniqueInput',
    distinct: 'ActivityDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.activity.aggregate({ ...args, ...select })
  },
})
module.exports = { ActivityAggregateQuery }
