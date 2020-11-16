import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneCreditOfUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.findOne(args)
    },
    findFirstCreditOfUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.findFirst(args)
    },
    findManyCreditOfUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.findMany(args)
    },
    findManyCreditOfUserCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.count(args)
    },
    aggregateCreditOfUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.aggregate(args)
    },
  },
  Mutation: {
    createOneCreditOfUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.create(args)
    },
    updateOneCreditOfUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.update(args)
    },
    deleteOneCreditOfUser: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfUser.delete(args)
    },
    upsertOneCreditOfUser: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfUser.upsert(args)
    },
    deleteManyCreditOfUser: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).creditOfUser.deleteMany(args)
    },
    updateManyCreditOfUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).creditOfUser.updateMany(args)
    },
  },
}
