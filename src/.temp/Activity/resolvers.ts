import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneActivity: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.findOne(args)
    },
    findFirstActivity: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.findFirst(args)
    },
    findManyActivity: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.findMany(args)
    },
    findManyActivityCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.count(args)
    },
    aggregateActivity: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.aggregate(args)
    },
  },
  Mutation: {
    createOneActivity: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.create(args)
    },
    updateOneActivity: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.update(args)
    },
    deleteOneActivity: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.delete(args)
    },
    upsertOneActivity: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.upsert(args)
    },
    deleteManyActivity: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.deleteMany(args)
    },
    updateManyActivity: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).activity.updateMany(args)
    },
  },
}
