const { queryField, arg } = require('@nexus/schema')

const NotificationFindCountQuery = queryField('findManyNotificationCount', {
  type: 'Int',
  args: {
    where: 'NotificationWhereInput',
    orderBy: arg({ type: 'NotificationOrderByInput', list: true }),
    cursor: 'NotificationWhereUniqueInput',
    distinct: 'NotificationDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.notification.count(args)
  },
})
module.exports = { NotificationFindCountQuery }
