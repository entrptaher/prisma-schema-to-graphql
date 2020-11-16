import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneAutoRenew: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.findOne(args)
    },
    findFirstAutoRenew: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.findFirst(args)
    },
    findManyAutoRenew: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.findMany(args)
    },
    findManyAutoRenewCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.count(args)
    },
    aggregateAutoRenew: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.aggregate(args)
    },
  },
  Mutation: {
    createOneAutoRenew: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.create(args)
    },
    updateOneAutoRenew: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.update(args)
    },
    deleteOneAutoRenew: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.delete(args)
    },
    upsertOneAutoRenew: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.upsert(args)
    },
    deleteManyAutoRenew: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.deleteMany(args)
    },
    updateManyAutoRenew: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).autoRenew.updateMany(args)
    },
  },
}
