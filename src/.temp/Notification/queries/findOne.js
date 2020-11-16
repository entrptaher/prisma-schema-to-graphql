const { queryField, arg } = require('@nexus/schema')

const NotificationFindOneQuery = queryField('findOneNotification', {
  type: 'Notification',
  nullable: true,
  args: {
    where: arg({
      type: 'NotificationWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.notification.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { NotificationFindOneQuery }
