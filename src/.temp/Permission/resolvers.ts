import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOnePermission: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.findOne(args)
    },
    findFirstPermission: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.findFirst(args)
    },
    findManyPermission: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.findMany(args)
    },
    findManyPermissionCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.count(args)
    },
    aggregatePermission: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.aggregate(args)
    },
  },
  Mutation: {
    createOnePermission: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.create(args)
    },
    updateOnePermission: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.update(args)
    },
    deleteOnePermission: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.delete(args)
    },
    upsertOnePermission: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.upsert(args)
    },
    deleteManyPermission: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).permission.deleteMany(args)
    },
    updateManyPermission: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).permission.updateMany(args)
    },
  },
}
