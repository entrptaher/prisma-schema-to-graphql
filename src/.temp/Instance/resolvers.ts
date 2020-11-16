import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.findOne(args)
    },
    findFirstInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.findFirst(args)
    },
    findManyInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.findMany(args)
    },
    findManyInstanceCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.count(args)
    },
    aggregateInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.aggregate(args)
    },
  },
  Mutation: {
    createOneInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.create(args)
    },
    updateOneInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.update(args)
    },
    deleteOneInstance: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.delete(args)
    },
    upsertOneInstance: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.upsert(args)
    },
    deleteManyInstance: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.deleteMany(args)
    },
    updateManyInstance: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).instance.updateMany(args)
    },
  },
}
