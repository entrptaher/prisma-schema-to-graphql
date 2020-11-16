import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.findOne(args)
    },
    findFirstUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.findFirst(args)
    },
    findManyUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.findMany(args)
    },
    findManyUserCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.count(args)
    },
    aggregateUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.aggregate(args)
    },
  },
  Mutation: {
    createOneUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.create(args)
    },
    updateOneUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.update(args)
    },
    deleteOneUser: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.delete(args)
    },
    upsertOneUser: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.upsert(args)
    },
    deleteManyUser: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.deleteMany(args)
    },
    updateManyUser: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).user.updateMany(args)
    },
  },
}
