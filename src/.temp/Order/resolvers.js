const Order = {
  Query: {
    findOneOrder: (_parent, args, { prisma }) => {
      return prisma.order.findOne(args)
    },
    findFirstOrder: (_parent, args, { prisma }) => {
      return prisma.order.findFirst(args)
    },
    findManyOrder: (_parent, args, { prisma }) => {
      return prisma.order.findMany(args)
    },
    findManyOrderCount: (_parent, args, { prisma }) => {
      return prisma.order.count(args)
    },
    aggregateOrder: (_parent, args, { prisma }) => {
      return prisma.order.aggregate(args)
    },
  },
  Mutation: {
    createOneOrder: (_parent, args, { prisma }) => {
      return prisma.order.create(args)
    },
    updateOneOrder: (_parent, args, { prisma }) => {
      return prisma.order.update(args)
    },
    deleteOneOrder: async (_parent, args, { prisma }) => {
      return prisma.order.delete(args)
    },
    upsertOneOrder: async (_parent, args, { prisma }) => {
      return prisma.order.upsert(args)
    },
    deleteManyOrder: async (_parent, args, { prisma }) => {
      return prisma.order.deleteMany(args)
    },
    updateManyOrder: (_parent, args, { prisma }) => {
      return prisma.order.updateMany(args)
    },
  },
}

module.exports = {
  Order,
}
