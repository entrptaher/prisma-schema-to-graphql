import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneRetry: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.findOne(args)
    },
    findFirstRetry: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.findFirst(args)
    },
    findManyRetry: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.findMany(args)
    },
    findManyRetryCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.count(args)
    },
    aggregateRetry: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.aggregate(args)
    },
  },
  Mutation: {
    createOneRetry: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.create(args)
    },
    updateOneRetry: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.update(args)
    },
    deleteOneRetry: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.delete(args)
    },
    upsertOneRetry: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.upsert(args)
    },
    deleteManyRetry: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.deleteMany(args)
    },
    updateManyRetry: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).retry.updateMany(args)
    },
  },
}
