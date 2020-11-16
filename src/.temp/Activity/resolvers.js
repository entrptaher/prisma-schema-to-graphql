const Activity = {
  Query: {
    findOneActivity: (_parent, args, { prisma }) => {
      return prisma.activity.findOne(args)
    },
    findFirstActivity: (_parent, args, { prisma }) => {
      return prisma.activity.findFirst(args)
    },
    findManyActivity: (_parent, args, { prisma }) => {
      return prisma.activity.findMany(args)
    },
    findManyActivityCount: (_parent, args, { prisma }) => {
      return prisma.activity.count(args)
    },
    aggregateActivity: (_parent, args, { prisma }) => {
      return prisma.activity.aggregate(args)
    },
  },
  Mutation: {
    createOneActivity: (_parent, args, { prisma }) => {
      return prisma.activity.create(args)
    },
    updateOneActivity: (_parent, args, { prisma }) => {
      return prisma.activity.update(args)
    },
    deleteOneActivity: async (_parent, args, { prisma }) => {
      return prisma.activity.delete(args)
    },
    upsertOneActivity: async (_parent, args, { prisma }) => {
      return prisma.activity.upsert(args)
    },
    deleteManyActivity: async (_parent, args, { prisma }) => {
      return prisma.activity.deleteMany(args)
    },
    updateManyActivity: (_parent, args, { prisma }) => {
      return prisma.activity.updateMany(args)
    },
  },
}

module.exports = {
  Activity,
}
