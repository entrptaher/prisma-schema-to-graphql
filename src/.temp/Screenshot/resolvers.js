const Screenshot = {
  Query: {
    findOneScreenshot: (_parent, args, { prisma }) => {
      return prisma.screenshot.findOne(args)
    },
    findFirstScreenshot: (_parent, args, { prisma }) => {
      return prisma.screenshot.findFirst(args)
    },
    findManyScreenshot: (_parent, args, { prisma }) => {
      return prisma.screenshot.findMany(args)
    },
    findManyScreenshotCount: (_parent, args, { prisma }) => {
      return prisma.screenshot.count(args)
    },
    aggregateScreenshot: (_parent, args, { prisma }) => {
      return prisma.screenshot.aggregate(args)
    },
  },
  Mutation: {
    createOneScreenshot: (_parent, args, { prisma }) => {
      return prisma.screenshot.create(args)
    },
    updateOneScreenshot: (_parent, args, { prisma }) => {
      return prisma.screenshot.update(args)
    },
    deleteOneScreenshot: async (_parent, args, { prisma }) => {
      return prisma.screenshot.delete(args)
    },
    upsertOneScreenshot: async (_parent, args, { prisma }) => {
      return prisma.screenshot.upsert(args)
    },
    deleteManyScreenshot: async (_parent, args, { prisma }) => {
      return prisma.screenshot.deleteMany(args)
    },
    updateManyScreenshot: (_parent, args, { prisma }) => {
      return prisma.screenshot.updateMany(args)
    },
  },
}

module.exports = {
  Screenshot,
}
