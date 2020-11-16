const Settings = {
  Query: {
    findOneSettings: (_parent, args, { prisma }) => {
      return prisma.settings.findOne(args)
    },
    findFirstSettings: (_parent, args, { prisma }) => {
      return prisma.settings.findFirst(args)
    },
    findManySettings: (_parent, args, { prisma }) => {
      return prisma.settings.findMany(args)
    },
    findManySettingsCount: (_parent, args, { prisma }) => {
      return prisma.settings.count(args)
    },
    aggregateSettings: (_parent, args, { prisma }) => {
      return prisma.settings.aggregate(args)
    },
  },
  Mutation: {
    createOneSettings: (_parent, args, { prisma }) => {
      return prisma.settings.create(args)
    },
    updateOneSettings: (_parent, args, { prisma }) => {
      return prisma.settings.update(args)
    },
    deleteOneSettings: async (_parent, args, { prisma }) => {
      return prisma.settings.delete(args)
    },
    upsertOneSettings: async (_parent, args, { prisma }) => {
      return prisma.settings.upsert(args)
    },
    deleteManySettings: async (_parent, args, { prisma }) => {
      return prisma.settings.deleteMany(args)
    },
    updateManySettings: (_parent, args, { prisma }) => {
      return prisma.settings.updateMany(args)
    },
  },
}

module.exports = {
  Settings,
}
