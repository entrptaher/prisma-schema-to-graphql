import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.findOne(args)
    },
    findFirstState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.findFirst(args)
    },
    findManyState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.findMany(args)
    },
    findManyStateCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.count(args)
    },
    aggregateState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.aggregate(args)
    },
  },
  Mutation: {
    createOneState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.create(args)
    },
    updateOneState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.update(args)
    },
    deleteOneState: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.delete(args)
    },
    upsertOneState: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.upsert(args)
    },
    deleteManyState: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.deleteMany(args)
    },
    updateManyState: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).state.updateMany(args)
    },
  },
}
