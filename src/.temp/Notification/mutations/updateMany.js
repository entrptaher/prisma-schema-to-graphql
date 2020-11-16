const { mutationField, arg } = require('@nexus/schema')

const NotificationUpdateManyMutation = mutationField('updateManyNotification', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'NotificationWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'NotificationUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.notification.updateMany(args)
  },
})
module.exports = { NotificationUpdateManyMutation }
