import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.findOne(args)
    },
    findFirstSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.findFirst(args)
    },
    findManySettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.findMany(args)
    },
    findManySettingsCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.count(args)
    },
    aggregateSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.aggregate(args)
    },
  },
  Mutation: {
    createOneSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.create(args)
    },
    updateOneSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.update(args)
    },
    deleteOneSettings: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.delete(args)
    },
    upsertOneSettings: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.upsert(args)
    },
    deleteManySettings: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.deleteMany(args)
    },
    updateManySettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).settings.updateMany(args)
    },
  },
}
