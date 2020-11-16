const Navigation = {
  Query: {
    findOneNavigation: (_parent, args, { prisma }) => {
      return prisma.navigation.findOne(args)
    },
    findFirstNavigation: (_parent, args, { prisma }) => {
      return prisma.navigation.findFirst(args)
    },
    findManyNavigation: (_parent, args, { prisma }) => {
      return prisma.navigation.findMany(args)
    },
    findManyNavigationCount: (_parent, args, { prisma }) => {
      return prisma.navigation.count(args)
    },
    aggregateNavigation: (_parent, args, { prisma }) => {
      return prisma.navigation.aggregate(args)
    },
  },
  Mutation: {
    createOneNavigation: (_parent, args, { prisma }) => {
      return prisma.navigation.create(args)
    },
    updateOneNavigation: (_parent, args, { prisma }) => {
      return prisma.navigation.update(args)
    },
    deleteOneNavigation: async (_parent, args, { prisma }) => {
      return prisma.navigation.delete(args)
    },
    upsertOneNavigation: async (_parent, args, { prisma }) => {
      return prisma.navigation.upsert(args)
    },
    deleteManyNavigation: async (_parent, args, { prisma }) => {
      return prisma.navigation.deleteMany(args)
    },
    updateManyNavigation: (_parent, args, { prisma }) => {
      return prisma.navigation.updateMany(args)
    },
  },
}

module.exports = {
  Navigation,
}
