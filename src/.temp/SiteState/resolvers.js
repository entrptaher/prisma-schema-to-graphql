const SiteState = {
  Query: {
    findOneSiteState: (_parent, args, { prisma }) => {
      return prisma.siteState.findOne(args)
    },
    findFirstSiteState: (_parent, args, { prisma }) => {
      return prisma.siteState.findFirst(args)
    },
    findManySiteState: (_parent, args, { prisma }) => {
      return prisma.siteState.findMany(args)
    },
    findManySiteStateCount: (_parent, args, { prisma }) => {
      return prisma.siteState.count(args)
    },
    aggregateSiteState: (_parent, args, { prisma }) => {
      return prisma.siteState.aggregate(args)
    },
  },
  Mutation: {
    createOneSiteState: (_parent, args, { prisma }) => {
      return prisma.siteState.create(args)
    },
    updateOneSiteState: (_parent, args, { prisma }) => {
      return prisma.siteState.update(args)
    },
    deleteOneSiteState: async (_parent, args, { prisma }) => {
      return prisma.siteState.delete(args)
    },
    upsertOneSiteState: async (_parent, args, { prisma }) => {
      return prisma.siteState.upsert(args)
    },
    deleteManySiteState: async (_parent, args, { prisma }) => {
      return prisma.siteState.deleteMany(args)
    },
    updateManySiteState: (_parent, args, { prisma }) => {
      return prisma.siteState.updateMany(args)
    },
  },
}

module.exports = {
  SiteState,
}
