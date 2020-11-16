import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneRow: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.findOne(args)
    },
    findFirstRow: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.findFirst(args)
    },
    findManyRow: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.findMany(args)
    },
    findManyRowCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.count(args)
    },
    aggregateRow: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.aggregate(args)
    },
  },
  Mutation: {
    createOneRow: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.create(args)
    },
    updateOneRow: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.update(args)
    },
    deleteOneRow: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.delete(args)
    },
    upsertOneRow: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.upsert(args)
    },
    deleteManyRow: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.deleteMany(args)
    },
    updateManyRow: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).row.updateMany(args)
    },
  },
}
