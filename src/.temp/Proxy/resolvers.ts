import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneProxy: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.findOne(args)
    },
    findFirstProxy: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.findFirst(args)
    },
    findManyProxy: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.findMany(args)
    },
    findManyProxyCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.count(args)
    },
    aggregateProxy: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.aggregate(args)
    },
  },
  Mutation: {
    createOneProxy: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.create(args)
    },
    updateOneProxy: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.update(args)
    },
    deleteOneProxy: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.delete(args)
    },
    upsertOneProxy: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.upsert(args)
    },
    deleteManyProxy: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.deleteMany(args)
    },
    updateManyProxy: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).proxy.updateMany(args)
    },
  },
}
