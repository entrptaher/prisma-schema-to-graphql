import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneInstanceSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instanceSettings.findOne(args)
    },
    findFirstInstanceSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instanceSettings.findFirst(args)
    },
    findManyInstanceSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instanceSettings.findMany(args)
    },
    findManyInstanceSettingsCount: (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).instanceSettings.count(args)
    },
    aggregateInstanceSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instanceSettings.aggregate(args)
    },
  },
  Mutation: {
    createOneInstanceSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instanceSettings.create(args)
    },
    updateOneInstanceSettings: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instanceSettings.update(args)
    },
    deleteOneInstanceSettings: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).instanceSettings.delete(args)
    },
    upsertOneInstanceSettings: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).instanceSettings.upsert(args)
    },
    deleteManyInstanceSettings: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).instanceSettings.deleteMany(args)
    },
    updateManyInstanceSettings: (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).instanceSettings.updateMany(args)
    },
  },
}
