const Instance = {
  Query: {
    findOneInstance: (_parent, args, { prisma }) => {
      return prisma.instance.findOne(args)
    },
    findFirstInstance: (_parent, args, { prisma }) => {
      return prisma.instance.findFirst(args)
    },
    findManyInstance: (_parent, args, { prisma }) => {
      return prisma.instance.findMany(args)
    },
    findManyInstanceCount: (_parent, args, { prisma }) => {
      return prisma.instance.count(args)
    },
    aggregateInstance: (_parent, args, { prisma }) => {
      return prisma.instance.aggregate(args)
    },
  },
  Mutation: {
    createOneInstance: (_parent, args, { prisma }) => {
      return prisma.instance.create(args)
    },
    updateOneInstance: (_parent, args, { prisma }) => {
      return prisma.instance.update(args)
    },
    deleteOneInstance: async (_parent, args, { prisma }) => {
      return prisma.instance.delete(args)
    },
    upsertOneInstance: async (_parent, args, { prisma }) => {
      return prisma.instance.upsert(args)
    },
    deleteManyInstance: async (_parent, args, { prisma }) => {
      return prisma.instance.deleteMany(args)
    },
    updateManyInstance: (_parent, args, { prisma }) => {
      return prisma.instance.updateMany(args)
    },
  },
}

module.exports = {
  Instance,
}
