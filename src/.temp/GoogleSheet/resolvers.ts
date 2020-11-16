import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneGoogleSheet: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.findOne(args)
    },
    findFirstGoogleSheet: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.findFirst(args)
    },
    findManyGoogleSheet: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.findMany(args)
    },
    findManyGoogleSheetCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.count(args)
    },
    aggregateGoogleSheet: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.aggregate(args)
    },
  },
  Mutation: {
    createOneGoogleSheet: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.create(args)
    },
    updateOneGoogleSheet: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.update(args)
    },
    deleteOneGoogleSheet: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).googleSheet.delete(args)
    },
    upsertOneGoogleSheet: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).googleSheet.upsert(args)
    },
    deleteManyGoogleSheet: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).googleSheet.deleteMany(args)
    },
    updateManyGoogleSheet: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleSheet.updateMany(args)
    },
  },
}
