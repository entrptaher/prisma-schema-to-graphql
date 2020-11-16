const { queryField, arg } = require('@nexus/schema')

const NotificationAggregateQuery = queryField('aggregateNotification', {
  type: 'AggregateNotification',
  nullable: true,
  args: {
    where: 'NotificationWhereInput',
    orderBy: arg({ type: 'NotificationOrderByInput', list: true }),
    cursor: 'NotificationWhereUniqueInput',
    distinct: 'NotificationDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.notification.aggregate({ ...args, ...select })
  },
})
module.exports = { NotificationAggregateQuery }
