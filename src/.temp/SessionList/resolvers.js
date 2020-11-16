const SessionList = {
  Query: {
    findOneSessionList: (_parent, args, { prisma }) => {
      return prisma.sessionList.findOne(args)
    },
    findFirstSessionList: (_parent, args, { prisma }) => {
      return prisma.sessionList.findFirst(args)
    },
    findManySessionList: (_parent, args, { prisma }) => {
      return prisma.sessionList.findMany(args)
    },
    findManySessionListCount: (_parent, args, { prisma }) => {
      return prisma.sessionList.count(args)
    },
    aggregateSessionList: (_parent, args, { prisma }) => {
      return prisma.sessionList.aggregate(args)
    },
  },
  Mutation: {
    createOneSessionList: (_parent, args, { prisma }) => {
      return prisma.sessionList.create(args)
    },
    updateOneSessionList: (_parent, args, { prisma }) => {
      return prisma.sessionList.update(args)
    },
    deleteOneSessionList: async (_parent, args, { prisma }) => {
      return prisma.sessionList.delete(args)
    },
    upsertOneSessionList: async (_parent, args, { prisma }) => {
      return prisma.sessionList.upsert(args)
    },
    deleteManySessionList: async (_parent, args, { prisma }) => {
      return prisma.sessionList.deleteMany(args)
    },
    updateManySessionList: (_parent, args, { prisma }) => {
      return prisma.sessionList.updateMany(args)
    },
  },
}

module.exports = {
  SessionList,
}
