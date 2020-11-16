const Proxy = {
  Query: {
    findOneProxy: (_parent, args, { prisma }) => {
      return prisma.proxy.findOne(args)
    },
    findFirstProxy: (_parent, args, { prisma }) => {
      return prisma.proxy.findFirst(args)
    },
    findManyProxy: (_parent, args, { prisma }) => {
      return prisma.proxy.findMany(args)
    },
    findManyProxyCount: (_parent, args, { prisma }) => {
      return prisma.proxy.count(args)
    },
    aggregateProxy: (_parent, args, { prisma }) => {
      return prisma.proxy.aggregate(args)
    },
  },
  Mutation: {
    createOneProxy: (_parent, args, { prisma }) => {
      return prisma.proxy.create(args)
    },
    updateOneProxy: (_parent, args, { prisma }) => {
      return prisma.proxy.update(args)
    },
    deleteOneProxy: async (_parent, args, { prisma }) => {
      return prisma.proxy.delete(args)
    },
    upsertOneProxy: async (_parent, args, { prisma }) => {
      return prisma.proxy.upsert(args)
    },
    deleteManyProxy: async (_parent, args, { prisma }) => {
      return prisma.proxy.deleteMany(args)
    },
    updateManyProxy: (_parent, args, { prisma }) => {
      return prisma.proxy.updateMany(args)
    },
  },
}

module.exports = {
  Proxy,
}
