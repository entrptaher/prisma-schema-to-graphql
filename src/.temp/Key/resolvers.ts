import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneKey: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.findOne(args)
    },
    findFirstKey: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.findFirst(args)
    },
    findManyKey: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.findMany(args)
    },
    findManyKeyCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.count(args)
    },
    aggregateKey: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.aggregate(args)
    },
  },
  Mutation: {
    createOneKey: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.create(args)
    },
    updateOneKey: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.update(args)
    },
    deleteOneKey: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.delete(args)
    },
    upsertOneKey: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.upsert(args)
    },
    deleteManyKey: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.deleteMany(args)
    },
    updateManyKey: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).key.updateMany(args)
    },
  },
}
