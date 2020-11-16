const Package = {
  Query: {
    findOnePackage: (_parent, args, { prisma }) => {
      return prisma.package.findOne(args)
    },
    findFirstPackage: (_parent, args, { prisma }) => {
      return prisma.package.findFirst(args)
    },
    findManyPackage: (_parent, args, { prisma }) => {
      return prisma.package.findMany(args)
    },
    findManyPackageCount: (_parent, args, { prisma }) => {
      return prisma.package.count(args)
    },
    aggregatePackage: (_parent, args, { prisma }) => {
      return prisma.package.aggregate(args)
    },
  },
  Mutation: {
    createOnePackage: (_parent, args, { prisma }) => {
      return prisma.package.create(args)
    },
    updateOnePackage: (_parent, args, { prisma }) => {
      return prisma.package.update(args)
    },
    deleteOnePackage: async (_parent, args, { prisma }) => {
      return prisma.package.delete(args)
    },
    upsertOnePackage: async (_parent, args, { prisma }) => {
      return prisma.package.upsert(args)
    },
    deleteManyPackage: async (_parent, args, { prisma }) => {
      return prisma.package.deleteMany(args)
    },
    updateManyPackage: (_parent, args, { prisma }) => {
      return prisma.package.updateMany(args)
    },
  },
}

module.exports = {
  Package,
}
