const { mutationField, arg } = require('@nexus/schema')

const NotificationDeleteOneMutation = mutationField('deleteOneNotification', {
  type: 'Notification',
  nullable: true,
  args: {
    where: arg({
      type: 'NotificationWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.notification.delete({
      where,
      ...select,
    })
  },
})
module.exports = { NotificationDeleteOneMutation }
