const { mutationField, arg } = require('@nexus/schema')

const NotificationCreateOneMutation = mutationField('createOneNotification', {
  type: 'Notification',
  nullable: false,
  args: {
    data: arg({
      type: 'NotificationCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.notification.create({
      data,
      ...select,
    })
  },
})
module.exports = { NotificationCreateOneMutation }
