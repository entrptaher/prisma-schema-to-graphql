const Row = {
  Query: {
    findOneRow: (_parent, args, { prisma }) => {
      return prisma.row.findOne(args)
    },
    findFirstRow: (_parent, args, { prisma }) => {
      return prisma.row.findFirst(args)
    },
    findManyRow: (_parent, args, { prisma }) => {
      return prisma.row.findMany(args)
    },
    findManyRowCount: (_parent, args, { prisma }) => {
      return prisma.row.count(args)
    },
    aggregateRow: (_parent, args, { prisma }) => {
      return prisma.row.aggregate(args)
    },
  },
  Mutation: {
    createOneRow: (_parent, args, { prisma }) => {
      return prisma.row.create(args)
    },
    updateOneRow: (_parent, args, { prisma }) => {
      return prisma.row.update(args)
    },
    deleteOneRow: async (_parent, args, { prisma }) => {
      return prisma.row.delete(args)
    },
    upsertOneRow: async (_parent, args, { prisma }) => {
      return prisma.row.upsert(args)
    },
    deleteManyRow: async (_parent, args, { prisma }) => {
      return prisma.row.deleteMany(args)
    },
    updateManyRow: (_parent, args, { prisma }) => {
      return prisma.row.updateMany(args)
    },
  },
}

module.exports = {
  Row,
}
