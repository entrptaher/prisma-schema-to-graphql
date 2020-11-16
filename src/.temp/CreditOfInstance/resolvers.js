const CreditOfInstance = {
  Query: {
    findOneCreditOfInstance: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.findOne(args)
    },
    findFirstCreditOfInstance: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.findFirst(args)
    },
    findManyCreditOfInstance: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.findMany(args)
    },
    findManyCreditOfInstanceCount: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.count(args)
    },
    aggregateCreditOfInstance: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.aggregate(args)
    },
  },
  Mutation: {
    createOneCreditOfInstance: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.create(args)
    },
    updateOneCreditOfInstance: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.update(args)
    },
    deleteOneCreditOfInstance: async (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.delete(args)
    },
    upsertOneCreditOfInstance: async (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.upsert(args)
    },
    deleteManyCreditOfInstance: async (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.deleteMany(args)
    },
    updateManyCreditOfInstance: (_parent, args, { prisma }) => {
      return prisma.creditOfInstance.updateMany(args)
    },
  },
}

module.exports = {
  CreditOfInstance,
}
