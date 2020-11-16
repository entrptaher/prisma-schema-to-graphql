const List = {
  Query: {
    findOneList: (_parent, args, { prisma }) => {
      return prisma.list.findOne(args)
    },
    findFirstList: (_parent, args, { prisma }) => {
      return prisma.list.findFirst(args)
    },
    findManyList: (_parent, args, { prisma }) => {
      return prisma.list.findMany(args)
    },
    findManyListCount: (_parent, args, { prisma }) => {
      return prisma.list.count(args)
    },
    aggregateList: (_parent, args, { prisma }) => {
      return prisma.list.aggregate(args)
    },
  },
  Mutation: {
    createOneList: (_parent, args, { prisma }) => {
      return prisma.list.create(args)
    },
    updateOneList: (_parent, args, { prisma }) => {
      return prisma.list.update(args)
    },
    deleteOneList: async (_parent, args, { prisma }) => {
      return prisma.list.delete(args)
    },
    upsertOneList: async (_parent, args, { prisma }) => {
      return prisma.list.upsert(args)
    },
    deleteManyList: async (_parent, args, { prisma }) => {
      return prisma.list.deleteMany(args)
    },
    updateManyList: (_parent, args, { prisma }) => {
      return prisma.list.updateMany(args)
    },
  },
}

module.exports = {
  List,
}
