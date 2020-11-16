const InstanceSettings = {
  Query: {
    findOneInstanceSettings: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.findOne(args)
    },
    findFirstInstanceSettings: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.findFirst(args)
    },
    findManyInstanceSettings: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.findMany(args)
    },
    findManyInstanceSettingsCount: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.count(args)
    },
    aggregateInstanceSettings: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.aggregate(args)
    },
  },
  Mutation: {
    createOneInstanceSettings: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.create(args)
    },
    updateOneInstanceSettings: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.update(args)
    },
    deleteOneInstanceSettings: async (_parent, args, { prisma }) => {
      return prisma.instanceSettings.delete(args)
    },
    upsertOneInstanceSettings: async (_parent, args, { prisma }) => {
      return prisma.instanceSettings.upsert(args)
    },
    deleteManyInstanceSettings: async (_parent, args, { prisma }) => {
      return prisma.instanceSettings.deleteMany(args)
    },
    updateManyInstanceSettings: (_parent, args, { prisma }) => {
      return prisma.instanceSettings.updateMany(args)
    },
  },
}

module.exports = {
  InstanceSettings,
}
