const { queryField, arg } = require('@nexus/schema')

const NotificationFindManyQuery = queryField('findManyNotification', {
  type: 'Notification',
  list: [true],
  args: {
    where: 'NotificationWhereInput',
    orderBy: arg({ type: 'NotificationOrderByInput', list: true }),
    cursor: 'NotificationWhereUniqueInput',
    distinct: 'NotificationDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.notification.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { NotificationFindManyQuery }
