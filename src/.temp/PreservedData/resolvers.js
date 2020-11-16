const PreservedData = {
  Query: {
    findOnePreservedData: (_parent, args, { prisma }) => {
      return prisma.preservedData.findOne(args)
    },
    findFirstPreservedData: (_parent, args, { prisma }) => {
      return prisma.preservedData.findFirst(args)
    },
    findManyPreservedData: (_parent, args, { prisma }) => {
      return prisma.preservedData.findMany(args)
    },
    findManyPreservedDataCount: (_parent, args, { prisma }) => {
      return prisma.preservedData.count(args)
    },
    aggregatePreservedData: (_parent, args, { prisma }) => {
      return prisma.preservedData.aggregate(args)
    },
  },
  Mutation: {
    createOnePreservedData: (_parent, args, { prisma }) => {
      return prisma.preservedData.create(args)
    },
    updateOnePreservedData: (_parent, args, { prisma }) => {
      return prisma.preservedData.update(args)
    },
    deleteOnePreservedData: async (_parent, args, { prisma }) => {
      return prisma.preservedData.delete(args)
    },
    upsertOnePreservedData: async (_parent, args, { prisma }) => {
      return prisma.preservedData.upsert(args)
    },
    deleteManyPreservedData: async (_parent, args, { prisma }) => {
      return prisma.preservedData.deleteMany(args)
    },
    updateManyPreservedData: (_parent, args, { prisma }) => {
      return prisma.preservedData.updateMany(args)
    },
  },
}

module.exports = {
  PreservedData,
}
