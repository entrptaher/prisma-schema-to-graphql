const Session = {
  Query: {
    findOneSession: (_parent, args, { prisma }) => {
      return prisma.session.findOne(args)
    },
    findFirstSession: (_parent, args, { prisma }) => {
      return prisma.session.findFirst(args)
    },
    findManySession: (_parent, args, { prisma }) => {
      return prisma.session.findMany(args)
    },
    findManySessionCount: (_parent, args, { prisma }) => {
      return prisma.session.count(args)
    },
    aggregateSession: (_parent, args, { prisma }) => {
      return prisma.session.aggregate(args)
    },
  },
  Mutation: {
    createOneSession: (_parent, args, { prisma }) => {
      return prisma.session.create(args)
    },
    updateOneSession: (_parent, args, { prisma }) => {
      return prisma.session.update(args)
    },
    deleteOneSession: async (_parent, args, { prisma }) => {
      return prisma.session.delete(args)
    },
    upsertOneSession: async (_parent, args, { prisma }) => {
      return prisma.session.upsert(args)
    },
    deleteManySession: async (_parent, args, { prisma }) => {
      return prisma.session.deleteMany(args)
    },
    updateManySession: (_parent, args, { prisma }) => {
      return prisma.session.updateMany(args)
    },
  },
}

module.exports = {
  Session,
}
