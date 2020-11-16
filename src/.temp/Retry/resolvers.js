const Retry = {
  Query: {
    findOneRetry: (_parent, args, { prisma }) => {
      return prisma.retry.findOne(args)
    },
    findFirstRetry: (_parent, args, { prisma }) => {
      return prisma.retry.findFirst(args)
    },
    findManyRetry: (_parent, args, { prisma }) => {
      return prisma.retry.findMany(args)
    },
    findManyRetryCount: (_parent, args, { prisma }) => {
      return prisma.retry.count(args)
    },
    aggregateRetry: (_parent, args, { prisma }) => {
      return prisma.retry.aggregate(args)
    },
  },
  Mutation: {
    createOneRetry: (_parent, args, { prisma }) => {
      return prisma.retry.create(args)
    },
    updateOneRetry: (_parent, args, { prisma }) => {
      return prisma.retry.update(args)
    },
    deleteOneRetry: async (_parent, args, { prisma }) => {
      return prisma.retry.delete(args)
    },
    upsertOneRetry: async (_parent, args, { prisma }) => {
      return prisma.retry.upsert(args)
    },
    deleteManyRetry: async (_parent, args, { prisma }) => {
      return prisma.retry.deleteMany(args)
    },
    updateManyRetry: (_parent, args, { prisma }) => {
      return prisma.retry.updateMany(args)
    },
  },
}

module.exports = {
  Retry,
}
