const AutoRenew = {
  Query: {
    findOneAutoRenew: (_parent, args, { prisma }) => {
      return prisma.autoRenew.findOne(args)
    },
    findFirstAutoRenew: (_parent, args, { prisma }) => {
      return prisma.autoRenew.findFirst(args)
    },
    findManyAutoRenew: (_parent, args, { prisma }) => {
      return prisma.autoRenew.findMany(args)
    },
    findManyAutoRenewCount: (_parent, args, { prisma }) => {
      return prisma.autoRenew.count(args)
    },
    aggregateAutoRenew: (_parent, args, { prisma }) => {
      return prisma.autoRenew.aggregate(args)
    },
  },
  Mutation: {
    createOneAutoRenew: (_parent, args, { prisma }) => {
      return prisma.autoRenew.create(args)
    },
    updateOneAutoRenew: (_parent, args, { prisma }) => {
      return prisma.autoRenew.update(args)
    },
    deleteOneAutoRenew: async (_parent, args, { prisma }) => {
      return prisma.autoRenew.delete(args)
    },
    upsertOneAutoRenew: async (_parent, args, { prisma }) => {
      return prisma.autoRenew.upsert(args)
    },
    deleteManyAutoRenew: async (_parent, args, { prisma }) => {
      return prisma.autoRenew.deleteMany(args)
    },
    updateManyAutoRenew: (_parent, args, { prisma }) => {
      return prisma.autoRenew.updateMany(args)
    },
  },
}

module.exports = {
  AutoRenew,
}
