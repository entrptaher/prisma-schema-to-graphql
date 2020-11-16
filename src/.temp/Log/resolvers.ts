import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneLog: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.findOne(args)
    },
    findFirstLog: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.findFirst(args)
    },
    findManyLog: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.findMany(args)
    },
    findManyLogCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.count(args)
    },
    aggregateLog: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.aggregate(args)
    },
  },
  Mutation: {
    createOneLog: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.create(args)
    },
    updateOneLog: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.update(args)
    },
    deleteOneLog: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.delete(args)
    },
    upsertOneLog: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.upsert(args)
    },
    deleteManyLog: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.deleteMany(args)
    },
    updateManyLog: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).log.updateMany(args)
    },
  },
}
