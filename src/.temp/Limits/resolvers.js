const Limits = {
  Query: {
    findOneLimits: (_parent, args, { prisma }) => {
      return prisma.limits.findOne(args)
    },
    findFirstLimits: (_parent, args, { prisma }) => {
      return prisma.limits.findFirst(args)
    },
    findManyLimits: (_parent, args, { prisma }) => {
      return prisma.limits.findMany(args)
    },
    findManyLimitsCount: (_parent, args, { prisma }) => {
      return prisma.limits.count(args)
    },
    aggregateLimits: (_parent, args, { prisma }) => {
      return prisma.limits.aggregate(args)
    },
  },
  Mutation: {
    createOneLimits: (_parent, args, { prisma }) => {
      return prisma.limits.create(args)
    },
    updateOneLimits: (_parent, args, { prisma }) => {
      return prisma.limits.update(args)
    },
    deleteOneLimits: async (_parent, args, { prisma }) => {
      return prisma.limits.delete(args)
    },
    upsertOneLimits: async (_parent, args, { prisma }) => {
      return prisma.limits.upsert(args)
    },
    deleteManyLimits: async (_parent, args, { prisma }) => {
      return prisma.limits.deleteMany(args)
    },
    updateManyLimits: (_parent, args, { prisma }) => {
      return prisma.limits.updateMany(args)
    },
  },
}

module.exports = {
  Limits,
}
