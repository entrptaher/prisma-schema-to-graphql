import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneUiSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.findOne(args)
    },
    findFirstUiSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.findFirst(args)
    },
    findManyUiSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.findMany(args)
    },
    findManyUiSettingsCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.count(args)
    },
    aggregateUiSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.aggregate(args)
    },
  },
  Mutation: {
    createOneUiSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.create(args)
    },
    updateOneUiSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.update(args)
    },
    deleteOneUiSettings: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.delete(args)
    },
    upsertOneUiSettings: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.upsert(args)
    },
    deleteManyUiSettings: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).uiSettings.deleteMany(args)
    },
    updateManyUiSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).uiSettings.updateMany(args)
    },
  },
}
