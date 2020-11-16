import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneGoogleAuth: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.findOne(args)
    },
    findFirstGoogleAuth: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.findFirst(args)
    },
    findManyGoogleAuth: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.findMany(args)
    },
    findManyGoogleAuthCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.count(args)
    },
    aggregateGoogleAuth: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.aggregate(args)
    },
  },
  Mutation: {
    createOneGoogleAuth: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.create(args)
    },
    updateOneGoogleAuth: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.update(args)
    },
    deleteOneGoogleAuth: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.delete(args)
    },
    upsertOneGoogleAuth: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.upsert(args)
    },
    deleteManyGoogleAuth: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).googleAuth.deleteMany(args)
    },
    updateManyGoogleAuth: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).googleAuth.updateMany(args)
    },
  },
}
