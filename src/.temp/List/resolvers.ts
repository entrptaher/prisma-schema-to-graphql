import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.findOne(args)
    },
    findFirstList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.findFirst(args)
    },
    findManyList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.findMany(args)
    },
    findManyListCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.count(args)
    },
    aggregateList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.aggregate(args)
    },
  },
  Mutation: {
    createOneList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.create(args)
    },
    updateOneList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.update(args)
    },
    deleteOneList: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.delete(args)
    },
    upsertOneList: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.upsert(args)
    },
    deleteManyList: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.deleteMany(args)
    },
    updateManyList: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).list.updateMany(args)
    },
  },
}
