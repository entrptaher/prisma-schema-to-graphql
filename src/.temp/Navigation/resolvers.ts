import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneNavigation: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.findOne(args)
    },
    findFirstNavigation: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.findFirst(args)
    },
    findManyNavigation: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.findMany(args)
    },
    findManyNavigationCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.count(args)
    },
    aggregateNavigation: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.aggregate(args)
    },
  },
  Mutation: {
    createOneNavigation: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.create(args)
    },
    updateOneNavigation: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.update(args)
    },
    deleteOneNavigation: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.delete(args)
    },
    upsertOneNavigation: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.upsert(args)
    },
    deleteManyNavigation: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).navigation.deleteMany(args)
    },
    updateManyNavigation: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).navigation.updateMany(args)
    },
  },
}
