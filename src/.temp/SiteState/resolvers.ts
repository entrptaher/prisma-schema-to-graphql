import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSiteState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.findOne(args)
    },
    findFirstSiteState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.findFirst(args)
    },
    findManySiteState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.findMany(args)
    },
    findManySiteStateCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.count(args)
    },
    aggregateSiteState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.aggregate(args)
    },
  },
  Mutation: {
    createOneSiteState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.create(args)
    },
    updateOneSiteState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.update(args)
    },
    deleteOneSiteState: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.delete(args)
    },
    upsertOneSiteState: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.upsert(args)
    },
    deleteManySiteState: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.deleteMany(args)
    },
    updateManySiteState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).siteState.updateMany(args)
    },
  },
}
