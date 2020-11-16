const CreditOfUser = {
  Query: {
    findOneCreditOfUser: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.findOne(args)
    },
    findFirstCreditOfUser: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.findFirst(args)
    },
    findManyCreditOfUser: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.findMany(args)
    },
    findManyCreditOfUserCount: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.count(args)
    },
    aggregateCreditOfUser: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.aggregate(args)
    },
  },
  Mutation: {
    createOneCreditOfUser: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.create(args)
    },
    updateOneCreditOfUser: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.update(args)
    },
    deleteOneCreditOfUser: async (_parent, args, { prisma }) => {
      return prisma.creditOfUser.delete(args)
    },
    upsertOneCreditOfUser: async (_parent, args, { prisma }) => {
      return prisma.creditOfUser.upsert(args)
    },
    deleteManyCreditOfUser: async (_parent, args, { prisma }) => {
      return prisma.creditOfUser.deleteMany(args)
    },
    updateManyCreditOfUser: (_parent, args, { prisma }) => {
      return prisma.creditOfUser.updateMany(args)
    },
  },
}

module.exports = {
  CreditOfUser,
}
