import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOnePreservedData: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).preservedData.findOne(args)
    },
    findFirstPreservedData: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).preservedData.findFirst(args)
    },
    findManyPreservedData: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).preservedData.findMany(args)
    },
    findManyPreservedDataCount: (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).preservedData.count(args)
    },
    aggregatePreservedData: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).preservedData.aggregate(args)
    },
  },
  Mutation: {
    createOnePreservedData: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).preservedData.create(args)
    },
    updateOnePreservedData: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).preservedData.update(args)
    },
    deleteOnePreservedData: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).preservedData.delete(args)
    },
    upsertOnePreservedData: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).preservedData.upsert(args)
    },
    deleteManyPreservedData: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).preservedData.deleteMany(args)
    },
    updateManyPreservedData: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).preservedData.updateMany(args)
    },
  },
}
