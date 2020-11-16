import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSourceCode: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.findOne(args)
    },
    findFirstSourceCode: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.findFirst(args)
    },
    findManySourceCode: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.findMany(args)
    },
    findManySourceCodeCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.count(args)
    },
    aggregateSourceCode: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.aggregate(args)
    },
  },
  Mutation: {
    createOneSourceCode: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.create(args)
    },
    updateOneSourceCode: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.update(args)
    },
    deleteOneSourceCode: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.delete(args)
    },
    upsertOneSourceCode: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.upsert(args)
    },
    deleteManySourceCode: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).sourceCode.deleteMany(args)
    },
    updateManySourceCode: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).sourceCode.updateMany(args)
    },
  },
}
