const Intervals = {
  Query: {
    findOneIntervals: (_parent, args, { prisma }) => {
      return prisma.intervals.findOne(args)
    },
    findFirstIntervals: (_parent, args, { prisma }) => {
      return prisma.intervals.findFirst(args)
    },
    findManyIntervals: (_parent, args, { prisma }) => {
      return prisma.intervals.findMany(args)
    },
    findManyIntervalsCount: (_parent, args, { prisma }) => {
      return prisma.intervals.count(args)
    },
    aggregateIntervals: (_parent, args, { prisma }) => {
      return prisma.intervals.aggregate(args)
    },
  },
  Mutation: {
    createOneIntervals: (_parent, args, { prisma }) => {
      return prisma.intervals.create(args)
    },
    updateOneIntervals: (_parent, args, { prisma }) => {
      return prisma.intervals.update(args)
    },
    deleteOneIntervals: async (_parent, args, { prisma }) => {
      return prisma.intervals.delete(args)
    },
    upsertOneIntervals: async (_parent, args, { prisma }) => {
      return prisma.intervals.upsert(args)
    },
    deleteManyIntervals: async (_parent, args, { prisma }) => {
      return prisma.intervals.deleteMany(args)
    },
    updateManyIntervals: (_parent, args, { prisma }) => {
      return prisma.intervals.updateMany(args)
    },
  },
}

module.exports = {
  Intervals,
}
