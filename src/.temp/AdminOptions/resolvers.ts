import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneAdminOptions: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.findOne(args)
    },
    findFirstAdminOptions: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.findFirst(args)
    },
    findManyAdminOptions: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.findMany(args)
    },
    findManyAdminOptionsCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.count(args)
    },
    aggregateAdminOptions: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.aggregate(args)
    },
  },
  Mutation: {
    createOneAdminOptions: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.create(args)
    },
    updateOneAdminOptions: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.update(args)
    },
    deleteOneAdminOptions: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).adminOptions.delete(args)
    },
    upsertOneAdminOptions: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).adminOptions.upsert(args)
    },
    deleteManyAdminOptions: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).adminOptions.deleteMany(args)
    },
    updateManyAdminOptions: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).adminOptions.updateMany(args)
    },
  },
}
