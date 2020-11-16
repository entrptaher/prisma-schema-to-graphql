import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSession: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.findOne(args)
    },
    findFirstSession: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.findFirst(args)
    },
    findManySession: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.findMany(args)
    },
    findManySessionCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.count(args)
    },
    aggregateSession: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.aggregate(args)
    },
  },
  Mutation: {
    createOneSession: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.create(args)
    },
    updateOneSession: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.update(args)
    },
    deleteOneSession: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.delete(args)
    },
    upsertOneSession: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.upsert(args)
    },
    deleteManySession: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.deleteMany(args)
    },
    updateManySession: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).session.updateMany(args)
    },
  },
}
