const DynamicStats = {
  Query: {
    findOneDynamicStats: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.findOne(args)
    },
    findFirstDynamicStats: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.findFirst(args)
    },
    findManyDynamicStats: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.findMany(args)
    },
    findManyDynamicStatsCount: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.count(args)
    },
    aggregateDynamicStats: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.aggregate(args)
    },
  },
  Mutation: {
    createOneDynamicStats: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.create(args)
    },
    updateOneDynamicStats: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.update(args)
    },
    deleteOneDynamicStats: async (_parent, args, { prisma }) => {
      return prisma.dynamicStats.delete(args)
    },
    upsertOneDynamicStats: async (_parent, args, { prisma }) => {
      return prisma.dynamicStats.upsert(args)
    },
    deleteManyDynamicStats: async (_parent, args, { prisma }) => {
      return prisma.dynamicStats.deleteMany(args)
    },
    updateManyDynamicStats: (_parent, args, { prisma }) => {
      return prisma.dynamicStats.updateMany(args)
    },
  },
}

module.exports = {
  DynamicStats,
}
