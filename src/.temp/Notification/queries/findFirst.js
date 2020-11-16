const { queryField, arg } = require('@nexus/schema')

const NotificationFindFirstQuery = queryField('findFirstNotification', {
  type: 'Notification',
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
    return prisma.notification.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { NotificationFindFirstQuery }
