import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneCreditOfInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfInstance.findOne(args)
    },
    findFirstCreditOfInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfInstance.findFirst(args)
    },
    findManyCreditOfInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfInstance.findMany(args)
    },
    findManyCreditOfInstanceCount: (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfInstance.count(args)
    },
    aggregateCreditOfInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfInstance.aggregate(args)
    },
  },
  Mutation: {
    createOneCreditOfInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfInstance.create(args)
    },
    updateOneCreditOfInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfInstance.update(args)
    },
    deleteOneCreditOfInstance: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfInstance.delete(args)
    },
    upsertOneCreditOfInstance: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfInstance.upsert(args)
    },
    deleteManyCreditOfInstance: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfInstance.deleteMany(args)
    },
    updateManyCreditOfInstance: (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfInstance.updateMany(args)
    },
  },
}
