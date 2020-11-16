const GoogleSheet = {
  Query: {
    findOneGoogleSheet: (_parent, args, { prisma }) => {
      return prisma.googleSheet.findOne(args)
    },
    findFirstGoogleSheet: (_parent, args, { prisma }) => {
      return prisma.googleSheet.findFirst(args)
    },
    findManyGoogleSheet: (_parent, args, { prisma }) => {
      return prisma.googleSheet.findMany(args)
    },
    findManyGoogleSheetCount: (_parent, args, { prisma }) => {
      return prisma.googleSheet.count(args)
    },
    aggregateGoogleSheet: (_parent, args, { prisma }) => {
      return prisma.googleSheet.aggregate(args)
    },
  },
  Mutation: {
    createOneGoogleSheet: (_parent, args, { prisma }) => {
      return prisma.googleSheet.create(args)
    },
    updateOneGoogleSheet: (_parent, args, { prisma }) => {
      return prisma.googleSheet.update(args)
    },
    deleteOneGoogleSheet: async (_parent, args, { prisma }) => {
      return prisma.googleSheet.delete(args)
    },
    upsertOneGoogleSheet: async (_parent, args, { prisma }) => {
      return prisma.googleSheet.upsert(args)
    },
    deleteManyGoogleSheet: async (_parent, args, { prisma }) => {
      return prisma.googleSheet.deleteMany(args)
    },
    updateManyGoogleSheet: (_parent, args, { prisma }) => {
      return prisma.googleSheet.updateMany(args)
    },
  },
}

module.exports = {
  GoogleSheet,
}
