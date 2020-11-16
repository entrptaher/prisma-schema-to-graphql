const Permission = {
  Query: {
    findOnePermission: (_parent, args, { prisma }) => {
      return prisma.permission.findOne(args)
    },
    findFirstPermission: (_parent, args, { prisma }) => {
      return prisma.permission.findFirst(args)
    },
    findManyPermission: (_parent, args, { prisma }) => {
      return prisma.permission.findMany(args)
    },
    findManyPermissionCount: (_parent, args, { prisma }) => {
      return prisma.permission.count(args)
    },
    aggregatePermission: (_parent, args, { prisma }) => {
      return prisma.permission.aggregate(args)
    },
  },
  Mutation: {
    createOnePermission: (_parent, args, { prisma }) => {
      return prisma.permission.create(args)
    },
    updateOnePermission: (_parent, args, { prisma }) => {
      return prisma.permission.update(args)
    },
    deleteOnePermission: async (_parent, args, { prisma }) => {
      return prisma.permission.delete(args)
    },
    upsertOnePermission: async (_parent, args, { prisma }) => {
      return prisma.permission.upsert(args)
    },
    deleteManyPermission: async (_parent, args, { prisma }) => {
      return prisma.permission.deleteMany(args)
    },
    updateManyPermission: (_parent, args, { prisma }) => {
      return prisma.permission.updateMany(args)
    },
  },
}

module.exports = {
  Permission,
}
