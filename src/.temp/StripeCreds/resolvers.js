const StripeCreds = {
  Query: {
    findOneStripeCreds: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.findOne(args)
    },
    findFirstStripeCreds: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.findFirst(args)
    },
    findManyStripeCreds: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.findMany(args)
    },
    findManyStripeCredsCount: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.count(args)
    },
    aggregateStripeCreds: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.aggregate(args)
    },
  },
  Mutation: {
    createOneStripeCreds: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.create(args)
    },
    updateOneStripeCreds: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.update(args)
    },
    deleteOneStripeCreds: async (_parent, args, { prisma }) => {
      return prisma.stripeCreds.delete(args)
    },
    upsertOneStripeCreds: async (_parent, args, { prisma }) => {
      return prisma.stripeCreds.upsert(args)
    },
    deleteManyStripeCreds: async (_parent, args, { prisma }) => {
      return prisma.stripeCreds.deleteMany(args)
    },
    updateManyStripeCreds: (_parent, args, { prisma }) => {
      return prisma.stripeCreds.updateMany(args)
    },
  },
}

module.exports = {
  StripeCreds,
}
