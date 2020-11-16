const SourceCode = {
  Query: {
    findOneSourceCode: (_parent, args, { prisma }) => {
      return prisma.sourceCode.findOne(args)
    },
    findFirstSourceCode: (_parent, args, { prisma }) => {
      return prisma.sourceCode.findFirst(args)
    },
    findManySourceCode: (_parent, args, { prisma }) => {
      return prisma.sourceCode.findMany(args)
    },
    findManySourceCodeCount: (_parent, args, { prisma }) => {
      return prisma.sourceCode.count(args)
    },
    aggregateSourceCode: (_parent, args, { prisma }) => {
      return prisma.sourceCode.aggregate(args)
    },
  },
  Mutation: {
    createOneSourceCode: (_parent, args, { prisma }) => {
      return prisma.sourceCode.create(args)
    },
    updateOneSourceCode: (_parent, args, { prisma }) => {
      return prisma.sourceCode.update(args)
    },
    deleteOneSourceCode: async (_parent, args, { prisma }) => {
      return prisma.sourceCode.delete(args)
    },
    upsertOneSourceCode: async (_parent, args, { prisma }) => {
      return prisma.sourceCode.upsert(args)
    },
    deleteManySourceCode: async (_parent, args, { prisma }) => {
      return prisma.sourceCode.deleteMany(args)
    },
    updateManySourceCode: (_parent, args, { prisma }) => {
      return prisma.sourceCode.updateMany(args)
    },
  },
}

module.exports = {
  SourceCode,
}
