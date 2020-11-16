import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneRole: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.findOne(args)
    },
    findFirstRole: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.findFirst(args)
    },
    findManyRole: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.findMany(args)
    },
    findManyRoleCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.count(args)
    },
    aggregateRole: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.aggregate(args)
    },
  },
  Mutation: {
    createOneRole: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.create(args)
    },
    updateOneRole: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.update(args)
    },
    deleteOneRole: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.delete(args)
    },
    upsertOneRole: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.upsert(args)
    },
    deleteManyRole: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.deleteMany(args)
    },
    updateManyRole: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).role.updateMany(args)
    },
  },
}
