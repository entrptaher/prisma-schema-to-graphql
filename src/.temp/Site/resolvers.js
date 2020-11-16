const Site = {
  Query: {
    findOneSite: (_parent, args, { prisma }) => {
      return prisma.site.findOne(args)
    },
    findFirstSite: (_parent, args, { prisma }) => {
      return prisma.site.findFirst(args)
    },
    findManySite: (_parent, args, { prisma }) => {
      return prisma.site.findMany(args)
    },
    findManySiteCount: (_parent, args, { prisma }) => {
      return prisma.site.count(args)
    },
    aggregateSite: (_parent, args, { prisma }) => {
      return prisma.site.aggregate(args)
    },
  },
  Mutation: {
    createOneSite: (_parent, args, { prisma }) => {
      return prisma.site.create(args)
    },
    updateOneSite: (_parent, args, { prisma }) => {
      return prisma.site.update(args)
    },
    deleteOneSite: async (_parent, args, { prisma }) => {
      return prisma.site.delete(args)
    },
    upsertOneSite: async (_parent, args, { prisma }) => {
      return prisma.site.upsert(args)
    },
    deleteManySite: async (_parent, args, { prisma }) => {
      return prisma.site.deleteMany(args)
    },
    updateManySite: (_parent, args, { prisma }) => {
      return prisma.site.updateMany(args)
    },
  },
}

module.exports = {
  Site,
}
