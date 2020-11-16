const Meta = {
  Query: {
    findOneMeta: (_parent, args, { prisma }) => {
      return prisma.meta.findOne(args)
    },
    findFirstMeta: (_parent, args, { prisma }) => {
      return prisma.meta.findFirst(args)
    },
    findManyMeta: (_parent, args, { prisma }) => {
      return prisma.meta.findMany(args)
    },
    findManyMetaCount: (_parent, args, { prisma }) => {
      return prisma.meta.count(args)
    },
    aggregateMeta: (_parent, args, { prisma }) => {
      return prisma.meta.aggregate(args)
    },
  },
  Mutation: {
    createOneMeta: (_parent, args, { prisma }) => {
      return prisma.meta.create(args)
    },
    updateOneMeta: (_parent, args, { prisma }) => {
      return prisma.meta.update(args)
    },
    deleteOneMeta: async (_parent, args, { prisma }) => {
      return prisma.meta.delete(args)
    },
    upsertOneMeta: async (_parent, args, { prisma }) => {
      return prisma.meta.upsert(args)
    },
    deleteManyMeta: async (_parent, args, { prisma }) => {
      return prisma.meta.deleteMany(args)
    },
    updateManyMeta: (_parent, args, { prisma }) => {
      return prisma.meta.updateMany(args)
    },
  },
}

module.exports = {
  Meta,
}
