import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneNotification: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.findOne(args)
    },
    findFirstNotification: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.findFirst(args)
    },
    findManyNotification: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.findMany(args)
    },
    findManyNotificationCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.count(args)
    },
    aggregateNotification: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.aggregate(args)
    },
  },
  Mutation: {
    createOneNotification: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.create(args)
    },
    updateOneNotification: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.update(args)
    },
    deleteOneNotification: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).notification.delete(args)
    },
    upsertOneNotification: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).notification.upsert(args)
    },
    deleteManyNotification: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).notification.deleteMany(args)
    },
    updateManyNotification: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).notification.updateMany(args)
    },
  },
}
