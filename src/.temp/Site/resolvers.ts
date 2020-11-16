import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSite: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.findOne(args)
    },
    findFirstSite: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.findFirst(args)
    },
    findManySite: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.findMany(args)
    },
    findManySiteCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.count(args)
    },
    aggregateSite: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.aggregate(args)
    },
  },
  Mutation: {
    createOneSite: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.create(args)
    },
    updateOneSite: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.update(args)
    },
    deleteOneSite: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.delete(args)
    },
    upsertOneSite: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.upsert(args)
    },
    deleteManySite: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.deleteMany(args)
    },
    updateManySite: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).site.updateMany(args)
    },
  },
}
