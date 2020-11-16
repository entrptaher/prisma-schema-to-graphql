const Key = {
  Query: {
    findOneKey: (_parent, args, { prisma }) => {
      return prisma.key.findOne(args)
    },
    findFirstKey: (_parent, args, { prisma }) => {
      return prisma.key.findFirst(args)
    },
    findManyKey: (_parent, args, { prisma }) => {
      return prisma.key.findMany(args)
    },
    findManyKeyCount: (_parent, args, { prisma }) => {
      return prisma.key.count(args)
    },
    aggregateKey: (_parent, args, { prisma }) => {
      return prisma.key.aggregate(args)
    },
  },
  Mutation: {
    createOneKey: (_parent, args, { prisma }) => {
      return prisma.key.create(args)
    },
    updateOneKey: (_parent, args, { prisma }) => {
      return prisma.key.update(args)
    },
    deleteOneKey: async (_parent, args, { prisma }) => {
      return prisma.key.delete(args)
    },
    upsertOneKey: async (_parent, args, { prisma }) => {
      return prisma.key.upsert(args)
    },
    deleteManyKey: async (_parent, args, { prisma }) => {
      return prisma.key.deleteMany(args)
    },
    updateManyKey: (_parent, args, { prisma }) => {
      return prisma.key.updateMany(args)
    },
  },
}

module.exports = {
  Key,
}
