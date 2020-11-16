import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneIntervals: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.findOne(args)
    },
    findFirstIntervals: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.findFirst(args)
    },
    findManyIntervals: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.findMany(args)
    },
    findManyIntervalsCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.count(args)
    },
    aggregateIntervals: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.aggregate(args)
    },
  },
  Mutation: {
    createOneIntervals: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.create(args)
    },
    updateOneIntervals: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.update(args)
    },
    deleteOneIntervals: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.delete(args)
    },
    upsertOneIntervals: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.upsert(args)
    },
    deleteManyIntervals: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.deleteMany(args)
    },
    updateManyIntervals: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).intervals.updateMany(args)
    },
  },
}
