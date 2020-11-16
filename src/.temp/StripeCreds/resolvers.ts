import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneStripeCreds: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.findOne(args)
    },
    findFirstStripeCreds: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.findFirst(args)
    },
    findManyStripeCreds: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.findMany(args)
    },
    findManyStripeCredsCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.count(args)
    },
    aggregateStripeCreds: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.aggregate(args)
    },
  },
  Mutation: {
    createOneStripeCreds: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.create(args)
    },
    updateOneStripeCreds: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.update(args)
    },
    deleteOneStripeCreds: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).stripeCreds.delete(args)
    },
    upsertOneStripeCreds: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).stripeCreds.upsert(args)
    },
    deleteManyStripeCreds: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).stripeCreds.deleteMany(args)
    },
    updateManyStripeCreds: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).stripeCreds.updateMany(args)
    },
  },
}
