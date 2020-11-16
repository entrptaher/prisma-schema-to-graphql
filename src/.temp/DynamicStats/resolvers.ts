import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneDynamicStats: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.findOne(args)
    },
    findFirstDynamicStats: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.findFirst(args)
    },
    findManyDynamicStats: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.findMany(args)
    },
    findManyDynamicStatsCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.count(args)
    },
    aggregateDynamicStats: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.aggregate(args)
    },
  },
  Mutation: {
    createOneDynamicStats: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.create(args)
    },
    updateOneDynamicStats: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.update(args)
    },
    deleteOneDynamicStats: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).dynamicStats.delete(args)
    },
    upsertOneDynamicStats: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).dynamicStats.upsert(args)
    },
    deleteManyDynamicStats: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).dynamicStats.deleteMany(args)
    },
    updateManyDynamicStats: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).dynamicStats.updateMany(args)
    },
  },
}
