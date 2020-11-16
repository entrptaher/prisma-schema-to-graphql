const { mutationField, arg } = require('@nexus/schema')

const NotificationUpdateOneMutation = mutationField('updateOneNotification', {
  type: 'Notification',
  nullable: false,
  args: {
    where: arg({
      type: 'NotificationWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'NotificationUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.notification.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { NotificationUpdateOneMutation }
