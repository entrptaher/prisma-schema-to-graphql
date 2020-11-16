import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneOrder: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.findOne(args)
    },
    findFirstOrder: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.findFirst(args)
    },
    findManyOrder: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.findMany(args)
    },
    findManyOrderCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.count(args)
    },
    aggregateOrder: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.aggregate(args)
    },
  },
  Mutation: {
    createOneOrder: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.create(args)
    },
    updateOneOrder: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.update(args)
    },
    deleteOneOrder: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.delete(args)
    },
    upsertOneOrder: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.upsert(args)
    },
    deleteManyOrder: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.deleteMany(args)
    },
    updateManyOrder: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).order.updateMany(args)
    },
  },
}
