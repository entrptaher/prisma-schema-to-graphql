const GoogleAuth = {
  Query: {
    findOneGoogleAuth: (_parent, args, { prisma }) => {
      return prisma.googleAuth.findOne(args)
    },
    findFirstGoogleAuth: (_parent, args, { prisma }) => {
      return prisma.googleAuth.findFirst(args)
    },
    findManyGoogleAuth: (_parent, args, { prisma }) => {
      return prisma.googleAuth.findMany(args)
    },
    findManyGoogleAuthCount: (_parent, args, { prisma }) => {
      return prisma.googleAuth.count(args)
    },
    aggregateGoogleAuth: (_parent, args, { prisma }) => {
      return prisma.googleAuth.aggregate(args)
    },
  },
  Mutation: {
    createOneGoogleAuth: (_parent, args, { prisma }) => {
      return prisma.googleAuth.create(args)
    },
    updateOneGoogleAuth: (_parent, args, { prisma }) => {
      return prisma.googleAuth.update(args)
    },
    deleteOneGoogleAuth: async (_parent, args, { prisma }) => {
      return prisma.googleAuth.delete(args)
    },
    upsertOneGoogleAuth: async (_parent, args, { prisma }) => {
      return prisma.googleAuth.upsert(args)
    },
    deleteManyGoogleAuth: async (_parent, args, { prisma }) => {
      return prisma.googleAuth.deleteMany(args)
    },
    updateManyGoogleAuth: (_parent, args, { prisma }) => {
      return prisma.googleAuth.updateMany(args)
    },
  },
}

module.exports = {
  GoogleAuth,
}
