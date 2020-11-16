import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOnePushSub: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.findOne(args)
    },
    findFirstPushSub: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.findFirst(args)
    },
    findManyPushSub: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.findMany(args)
    },
    findManyPushSubCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.count(args)
    },
    aggregatePushSub: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.aggregate(args)
    },
  },
  Mutation: {
    createOnePushSub: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.create(args)
    },
    updateOnePushSub: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.update(args)
    },
    deleteOnePushSub: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.delete(args)
    },
    upsertOnePushSub: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.upsert(args)
    },
    deleteManyPushSub: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.deleteMany(args)
    },
    updateManyPushSub: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).pushSub.updateMany(args)
    },
  },
}
