const { mutationField, arg } = require('@nexus/schema')

const NotificationUpsertOneMutation = mutationField('upsertOneNotification', {
  type: 'Notification',
  nullable: false,
  args: {
    where: arg({
      type: 'NotificationWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'NotificationCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'NotificationUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.notification.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { NotificationUpsertOneMutation }
