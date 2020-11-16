const Notification = {
  Query: {
    findOneNotification: (_parent, args, { prisma }) => {
      return prisma.notification.findOne(args)
    },
    findFirstNotification: (_parent, args, { prisma }) => {
      return prisma.notification.findFirst(args)
    },
    findManyNotification: (_parent, args, { prisma }) => {
      return prisma.notification.findMany(args)
    },
    findManyNotificationCount: (_parent, args, { prisma }) => {
      return prisma.notification.count(args)
    },
    aggregateNotification: (_parent, args, { prisma }) => {
      return prisma.notification.aggregate(args)
    },
  },
  Mutation: {
    createOneNotification: (_parent, args, { prisma }) => {
      return prisma.notification.create(args)
    },
    updateOneNotification: (_parent, args, { prisma }) => {
      return prisma.notification.update(args)
    },
    deleteOneNotification: async (_parent, args, { prisma }) => {
      return prisma.notification.delete(args)
    },
    upsertOneNotification: async (_parent, args, { prisma }) => {
      return prisma.notification.upsert(args)
    },
    deleteManyNotification: async (_parent, args, { prisma }) => {
      return prisma.notification.deleteMany(args)
    },
    updateManyNotification: (_parent, args, { prisma }) => {
      return prisma.notification.updateMany(args)
    },
  },
}

module.exports = {
  Notification,
}
