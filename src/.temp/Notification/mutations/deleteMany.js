const { mutationField, arg } = require('@nexus/schema')

const NotificationDeleteManyMutation = mutationField('deleteManyNotification', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'NotificationWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.notification.deleteMany({ where })
  },
})
module.exports = { NotificationDeleteManyMutation }
