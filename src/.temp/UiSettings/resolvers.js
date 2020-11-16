const UiSettings = {
  Query: {
    findOneUiSettings: (_parent, args, { prisma }) => {
      return prisma.uiSettings.findOne(args)
    },
    findFirstUiSettings: (_parent, args, { prisma }) => {
      return prisma.uiSettings.findFirst(args)
    },
    findManyUiSettings: (_parent, args, { prisma }) => {
      return prisma.uiSettings.findMany(args)
    },
    findManyUiSettingsCount: (_parent, args, { prisma }) => {
      return prisma.uiSettings.count(args)
    },
    aggregateUiSettings: (_parent, args, { prisma }) => {
      return prisma.uiSettings.aggregate(args)
    },
  },
  Mutation: {
    createOneUiSettings: (_parent, args, { prisma }) => {
      return prisma.uiSettings.create(args)
    },
    updateOneUiSettings: (_parent, args, { prisma }) => {
      return prisma.uiSettings.update(args)
    },
    deleteOneUiSettings: async (_parent, args, { prisma }) => {
      return prisma.uiSettings.delete(args)
    },
    upsertOneUiSettings: async (_parent, args, { prisma }) => {
      return prisma.uiSettings.upsert(args)
    },
    deleteManyUiSettings: async (_parent, args, { prisma }) => {
      return prisma.uiSettings.deleteMany(args)
    },
    updateManyUiSettings: (_parent, args, { prisma }) => {
      return prisma.uiSettings.updateMany(args)
    },
  },
}

module.exports = {
  UiSettings,
}
