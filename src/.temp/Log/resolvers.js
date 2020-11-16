const Log = {
  Query: {
    findOneLog: (_parent, args, { prisma }) => {
      return prisma.log.findOne(args)
    },
    findFirstLog: (_parent, args, { prisma }) => {
      return prisma.log.findFirst(args)
    },
    findManyLog: (_parent, args, { prisma }) => {
      return prisma.log.findMany(args)
    },
    findManyLogCount: (_parent, args, { prisma }) => {
      return prisma.log.count(args)
    },
    aggregateLog: (_parent, args, { prisma }) => {
      return prisma.log.aggregate(args)
    },
  },
  Mutation: {
    createOneLog: (_parent, args, { prisma }) => {
      return prisma.log.create(args)
    },
    updateOneLog: (_parent, args, { prisma }) => {
      return prisma.log.update(args)
    },
    deleteOneLog: async (_parent, args, { prisma }) => {
      return prisma.log.delete(args)
    },
    upsertOneLog: async (_parent, args, { prisma }) => {
      return prisma.log.upsert(args)
    },
    deleteManyLog: async (_parent, args, { prisma }) => {
      return prisma.log.deleteMany(args)
    },
    updateManyLog: (_parent, args, { prisma }) => {
      return prisma.log.updateMany(args)
    },
  },
}

module.exports = {
  Log,
}
