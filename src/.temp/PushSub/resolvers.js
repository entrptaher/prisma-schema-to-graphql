const PushSub = {
  Query: {
    findOnePushSub: (_parent, args, { prisma }) => {
      return prisma.pushSub.findOne(args)
    },
    findFirstPushSub: (_parent, args, { prisma }) => {
      return prisma.pushSub.findFirst(args)
    },
    findManyPushSub: (_parent, args, { prisma }) => {
      return prisma.pushSub.findMany(args)
    },
    findManyPushSubCount: (_parent, args, { prisma }) => {
      return prisma.pushSub.count(args)
    },
    aggregatePushSub: (_parent, args, { prisma }) => {
      return prisma.pushSub.aggregate(args)
    },
  },
  Mutation: {
    createOnePushSub: (_parent, args, { prisma }) => {
      return prisma.pushSub.create(args)
    },
    updateOnePushSub: (_parent, args, { prisma }) => {
      return prisma.pushSub.update(args)
    },
    deleteOnePushSub: async (_parent, args, { prisma }) => {
      return prisma.pushSub.delete(args)
    },
    upsertOnePushSub: async (_parent, args, { prisma }) => {
      return prisma.pushSub.upsert(args)
    },
    deleteManyPushSub: async (_parent, args, { prisma }) => {
      return prisma.pushSub.deleteMany(args)
    },
    updateManyPushSub: (_parent, args, { prisma }) => {
      return prisma.pushSub.updateMany(args)
    },
  },
}

module.exports = {
  PushSub,
}
