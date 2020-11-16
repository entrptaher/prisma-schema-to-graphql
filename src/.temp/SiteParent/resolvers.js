const SiteParent = {
  Query: {
    findOneSiteParent: (_parent, args, { prisma }) => {
      return prisma.siteParent.findOne(args)
    },
    findFirstSiteParent: (_parent, args, { prisma }) => {
      return prisma.siteParent.findFirst(args)
    },
    findManySiteParent: (_parent, args, { prisma }) => {
      return prisma.siteParent.findMany(args)
    },
    findManySiteParentCount: (_parent, args, { prisma }) => {
      return prisma.siteParent.count(args)
    },
    aggregateSiteParent: (_parent, args, { prisma }) => {
      return prisma.siteParent.aggregate(args)
    },
  },
  Mutation: {
    createOneSiteParent: (_parent, args, { prisma }) => {
      return prisma.siteParent.create(args)
    },
    updateOneSiteParent: (_parent, args, { prisma }) => {
      return prisma.siteParent.update(args)
    },
    deleteOneSiteParent: async (_parent, args, { prisma }) => {
      return prisma.siteParent.delete(args)
    },
    upsertOneSiteParent: async (_parent, args, { prisma }) => {
      return prisma.siteParent.upsert(args)
    },
    deleteManySiteParent: async (_parent, args, { prisma }) => {
      return prisma.siteParent.deleteMany(args)
    },
    updateManySiteParent: (_parent, args, { prisma }) => {
      return prisma.siteParent.updateMany(args)
    },
  },
}

module.exports = {
  SiteParent,
}
