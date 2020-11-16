const State = {
  Query: {
    findOneState: (_parent, args, { prisma }) => {
      return prisma.state.findOne(args)
    },
    findFirstState: (_parent, args, { prisma }) => {
      return prisma.state.findFirst(args)
    },
    findManyState: (_parent, args, { prisma }) => {
      return prisma.state.findMany(args)
    },
    findManyStateCount: (_parent, args, { prisma }) => {
      return prisma.state.count(args)
    },
    aggregateState: (_parent, args, { prisma }) => {
      return prisma.state.aggregate(args)
    },
  },
  Mutation: {
    createOneState: (_parent, args, { prisma }) => {
      return prisma.state.create(args)
    },
    updateOneState: (_parent, args, { prisma }) => {
      return prisma.state.update(args)
    },
    deleteOneState: async (_parent, args, { prisma }) => {
      return prisma.state.delete(args)
    },
    upsertOneState: async (_parent, args, { prisma }) => {
      return prisma.state.upsert(args)
    },
    deleteManyState: async (_parent, args, { prisma }) => {
      return prisma.state.deleteMany(args)
    },
    updateManyState: (_parent, args, { prisma }) => {
      return prisma.state.updateMany(args)
    },
  },
}

module.exports = {
  State,
}
