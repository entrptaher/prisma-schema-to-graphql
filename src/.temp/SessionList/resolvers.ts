import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSessionList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.findOne(args)
    },
    findFirstSessionList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.findFirst(args)
    },
    findManySessionList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.findMany(args)
    },
    findManySessionListCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.count(args)
    },
    aggregateSessionList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.aggregate(args)
    },
  },
  Mutation: {
    createOneSessionList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.create(args)
    },
    updateOneSessionList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.update(args)
    },
    deleteOneSessionList: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).sessionList.delete(args)
    },
    upsertOneSessionList: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).sessionList.upsert(args)
    },
    deleteManySessionList: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).sessionList.deleteMany(args)
    },
    updateManySessionList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sessionList.updateMany(args)
    },
  },
}
