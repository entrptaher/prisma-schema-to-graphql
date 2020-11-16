import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSiteParent: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.findOne(args)
    },
    findFirstSiteParent: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.findFirst(args)
    },
    findManySiteParent: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.findMany(args)
    },
    findManySiteParentCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.count(args)
    },
    aggregateSiteParent: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.aggregate(args)
    },
  },
  Mutation: {
    createOneSiteParent: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.create(args)
    },
    updateOneSiteParent: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.update(args)
    },
    deleteOneSiteParent: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.delete(args)
    },
    upsertOneSiteParent: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.upsert(args)
    },
    deleteManySiteParent: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).siteParent.deleteMany(args)
    },
    updateManySiteParent: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteParent.updateMany(args)
    },
  },
}
