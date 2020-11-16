const AdminOptions = {
  Query: {
    findOneAdminOptions: (_parent, args, { prisma }) => {
      return prisma.adminOptions.findOne(args)
    },
    findFirstAdminOptions: (_parent, args, { prisma }) => {
      return prisma.adminOptions.findFirst(args)
    },
    findManyAdminOptions: (_parent, args, { prisma }) => {
      return prisma.adminOptions.findMany(args)
    },
    findManyAdminOptionsCount: (_parent, args, { prisma }) => {
      return prisma.adminOptions.count(args)
    },
    aggregateAdminOptions: (_parent, args, { prisma }) => {
      return prisma.adminOptions.aggregate(args)
    },
  },
  Mutation: {
    createOneAdminOptions: (_parent, args, { prisma }) => {
      return prisma.adminOptions.create(args)
    },
    updateOneAdminOptions: (_parent, args, { prisma }) => {
      return prisma.adminOptions.update(args)
    },
    deleteOneAdminOptions: async (_parent, args, { prisma }) => {
      return prisma.adminOptions.delete(args)
    },
    upsertOneAdminOptions: async (_parent, args, { prisma }) => {
      return prisma.adminOptions.upsert(args)
    },
    deleteManyAdminOptions: async (_parent, args, { prisma }) => {
      return prisma.adminOptions.deleteMany(args)
    },
    updateManyAdminOptions: (_parent, args, { prisma }) => {
      return prisma.adminOptions.updateMany(args)
    },
  },
}

module.exports = {
  AdminOptions,
}
